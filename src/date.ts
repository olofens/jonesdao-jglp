import { BigInt } from "@graphprotocol/graph-ts";

// Gets a complete ISO string
export function timestampToISOString(timestamp: BigInt): string {
  const date = new Date(timestamp.toU64() * 1000);
  return date.toISOString();
}

// Just gets the day part before T of an iso string
export function timestampToISODateString(timestamp: BigInt): string {
  const date = new Date(timestamp.toU64() * 1000);
  return date.toISOString().split("T")[0];
}

export function getISOHourString(date: Date): string {
  return date.toISOString().substring(0, 13);
}

// Gets an ISO string up to and including the hour part of the string
export function timestampToISOHourString(timestamp: BigInt): string {
  return getISOHourString(new Date(timestamp.toU64() * 1000));
}
