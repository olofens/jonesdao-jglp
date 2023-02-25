import { JGLPStrategyMetric } from "./../../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";
import { timestampToISOHourString, timestampToISOString } from "../date";

export function loadOrCreateJGLPStrategyMetric(
  timestamp: BigInt
): JGLPStrategyMetric | null {
  // Only one metric perhour, have this as an ID
  const id = timestampToISOHourString(timestamp);
  let metric = JGLPStrategyMetric.load(id);

  // If there already was an entry within this hour, return early and dont do anything to compute data faster
  if (metric != null) {
    return null;
  }

  if (metric == null) {
    metric = new JGLPStrategyMetric(id);
    metric.timestamp = timestamp;
    metric.isoTimestamp = timestampToISOString(timestamp);
    metric.save();
  }

  return metric;
}
