import { IncentiveMetric } from "./../../generated/schema";
import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { timestampToISOHourString, timestampToISOString } from "../date";
import { getETHPriceDecimals } from "../ETHUSDOracle";

export function loadOrCreateIncentiveMetric(
  timestamp: BigInt
): IncentiveMetric | null {
  // Only one metric perhour, have this as an ID
  const id = timestampToISOHourString(timestamp);
  let metric = IncentiveMetric.load(id);

  // If we already have an hourly metric here, just return
  if (metric != null) {
    return null;
  }

  metric = new IncentiveMetric(id);
  metric.timestamp = timestamp;
  metric.save();

  return metric;
}
