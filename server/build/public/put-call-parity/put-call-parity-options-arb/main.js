import { getDeltaPrices, getDeribitPrices } from "./exchange.mjs";
import { combineDeltaData, combineDerbibitData, structureData } from "./helpers.mjs";
import { findArbitrage } from "./arbitrage.mjs";
const main = async () => {
  /**
   * Extract Data
   * Structure Data
   * Search for Arbs
   */

  // Extract Delta Data
  const deltaCalls = await getDeltaPrices("call_options");
  const deltaPuts = await getDeltaPrices("put_options");
  const deltaData = combineDeltaData(deltaCalls, deltaPuts);

  // Extract Deribit Data
  const deribitBTC = await getDeribitPrices("BTC");
  const deribitETH = await getDeribitPrices("ETH");
  const deribitData = combineDerbibitData(deribitBTC, deribitETH);

  // Structure Data
  const structuredData = structureData(deltaData, deribitData);

  // Search for arbitrage
  const arbs = findArbitrage(structuredData);

  // Show results
  console.log(arbs);
  console.log("");
  console.log(arbs.length + " opportunities found.");
  console.log("");
  return {
    arbs,
    amount: arbs.length
  };
};
export function findArbs() {
  return main();
}