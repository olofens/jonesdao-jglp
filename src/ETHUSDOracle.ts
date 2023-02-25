import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { EACAggregatorProxy } from "./../generated/IncentiveReceiver/EACAggregatorProxy";
import { toDecimal } from "./decimals";
const ETHUSD_ORACLE = "0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612";
const DECIMALS = 8;

export function getETHPriceDecimals(): BigDecimal {
  const ethOracle = EACAggregatorProxy.bind(Address.fromString(ETHUSD_ORACLE));
  return toDecimal(ethOracle.latestAnswer(), DECIMALS);
}
