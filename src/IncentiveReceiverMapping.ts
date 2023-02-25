import { Deposit } from "./../generated/IncentiveReceiver/IncentiveReceiver";
import { collectIncentiveMetricData } from "./IncentiveReceiver/handler";

export function handleDeposit(event: Deposit): void {
  collectIncentiveMetricData(event.block.timestamp);
}
