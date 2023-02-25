import { ERC20 } from "./../../generated/IncentiveReceiver/ERC20";
import { Address, BigInt } from "@graphprotocol/graph-ts";
import { loadOrCreateIncentiveMetric } from "./metric";
import { WETH_ADDRESS, WETH_DECIMALS } from "../WETH";
import { toDecimal } from "../decimals";
import { getETHPriceDecimals } from "../ETHUSDOracle";
const JONES_INCENTIVES_RECEIVER = "0x5A446ba4D4BF482a3E63648E76E9404E784f7BbC";

export function collectIncentiveMetricData(timestamp: BigInt): void {
  const metric = loadOrCreateIncentiveMetric(timestamp);
  if (metric == null) {
    return;
  }

  const weth = ERC20.bind(Address.fromString(WETH_ADDRESS));
  const wethBalance = weth.balanceOf(
    Address.fromString(JONES_INCENTIVES_RECEIVER)
  );
  const wethBalanceDec = toDecimal(wethBalance, WETH_DECIMALS);
  const wethPrice = getETHPriceDecimals();

  metric.WETHBalance = wethBalanceDec;
  metric.WETHPrice = wethPrice;
  metric.WETHValue = wethBalanceDec.times(wethPrice);

  metric.save();
}
