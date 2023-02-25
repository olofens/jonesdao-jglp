import { JonesGlpLeverageStrategy } from "./../generated/JonesGlpVault/JonesGlpLeverageStrategy";
import { Address, BigInt } from "@graphprotocol/graph-ts";

const JONES_GLP_LEVERAGE_STRATEGY_1 =
  "0x8e53d1B71bf7c6487cFF5156257a687c8704cd31";
const JONES_GLP_LEVERAGE_STRATEGY_2 =
  "0x15df56a82c194FeFEC9337C37A41964B69b584d5";
const LEVERAGE_CONTRACT_SWITCH_BLOCK = "61636421";

export const LEVERAGE_DECIMALS = 12;
export const DEBT_DECIMALS = 6; // USDC has 6 decimal precision

export function getJonesGlpLeverageStrategy(
  block: BigInt
): JonesGlpLeverageStrategy {
  // If block is before the switch block, return first contract, else second
  if (block.lt(BigInt.fromString(LEVERAGE_CONTRACT_SWITCH_BLOCK))) {
    return JonesGlpLeverageStrategy.bind(
      Address.fromString(JONES_GLP_LEVERAGE_STRATEGY_1)
    );
  } else {
    return JonesGlpLeverageStrategy.bind(
      Address.fromString(JONES_GLP_LEVERAGE_STRATEGY_2)
    );
  }
}
