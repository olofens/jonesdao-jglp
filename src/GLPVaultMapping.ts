import { Deposit, Withdraw } from "../generated/JonesGlpVault/JonesGlpVault";
import { collectJGLPStrategyMetricData } from "./JGLPStrategy/handler";

export function handleDeposit(event: Deposit): void {
  collectJGLPStrategyMetricData(event.block.number, event.block.timestamp);
}

export function handleWithdraw(event: Withdraw): void {
  collectJGLPStrategyMetricData(event.block.number, event.block.timestamp);
}
