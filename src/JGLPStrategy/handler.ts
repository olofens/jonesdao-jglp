import { JonesGlpStableVault } from "./../../generated/JonesGlpVault/JonesGlpStableVault";
import { Address, BigInt } from "@graphprotocol/graph-ts";
import { toDecimal } from "../decimals";
import { getGLPPRiceAsDecimals, GLP_DECIMALS } from "../GLP";
import {
  getJonesGlpLeverageStrategy,
  LEVERAGE_DECIMALS,
  DEBT_DECIMALS,
} from "../JonesGlpLeverageStrategy";
import { loadOrCreateJGLPStrategyMetric } from "./metric";
const JONES_GLP_STABLE_VAULT_ADDRESS =
  "0xa485a0bc44988B95245D5F20497CCaFF58a73E99";

export function collectJGLPStrategyMetricData(
  block: BigInt,
  timestamp: BigInt
): void {
  const metric = loadOrCreateJGLPStrategyMetric(timestamp);

  if (metric == null) {
    // dont do anything
    return;
  }

  const strategy = getJonesGlpLeverageStrategy(block);

  metric.maxLeverage = toDecimal(strategy.getMaxLeverage(), LEVERAGE_DECIMALS);
  metric.minLeverage = toDecimal(strategy.getMinLeverage(), LEVERAGE_DECIMALS);
  metric.targetLeverage = toDecimal(
    strategy.getTargetLeverage(),
    LEVERAGE_DECIMALS
  );
  metric.leverage = toDecimal(strategy.leverage(), LEVERAGE_DECIMALS);
  metric.underlyingGlp = toDecimal(strategy.getUnderlyingGlp(), GLP_DECIMALS);

  metric.glpPrice = getGLPPRiceAsDecimals();
  metric.underlyingGlpValue = metric.underlyingGlp.times(metric.glpPrice);

  metric.stableDebt = toDecimal(strategy.stableDebt(), DEBT_DECIMALS);
  const stableVault = JonesGlpStableVault.bind(
    Address.fromString(JONES_GLP_STABLE_VAULT_ADDRESS)
  );
  const vaultUsdc = toDecimal(stableVault.totalAssets(), 6);
  metric.totalUSDC = vaultUsdc;

  metric.save();
}
