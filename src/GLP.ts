import { GlpManager } from "./../generated/JonesGlpVault/GlpManager";
import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { toDecimal } from "./decimals";

export const GLP_PRICE_DECIMALS = 30;
export const GLP_DECIMALS = 18;
const GLP_MANAGER = "0x3963ffc9dff443c2a94f21b129d429891e32ec18";

// Returns the price of GLP as a BigInt with 30 decimals precision
export function getGLPPrice(): BigInt {
  const glp = GlpManager.bind(Address.fromString(GLP_MANAGER));
  // I don't know what the false parameter does here :shrug:
  const glpPrice = glp.getPrice(false);
  return glpPrice;
}

export function getGLPPRiceAsDecimals(): BigDecimal {
  const glpPrice = getGLPPrice();
  return toDecimal(glpPrice, GLP_PRICE_DECIMALS);
}
