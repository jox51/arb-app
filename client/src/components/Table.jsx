import React from "react"
import { useSelector } from "react-redux"
import TableRow from "./TableRow"

const Table = () => {
  const { arbs } = useSelector((store) => store.arbs)

  // arb results variables, item1Symbol,item2Symbol,expiration,item1Type,item2Type,strike,futuresPrice, callPricesUsed : {callExch,priceSide,price,strike,callBal}, putPricesUsed: {putExch,priceSide,price,futuresPrice, putBal}, arbDiffUSD,diffPerc

  return (
    <div className="flex flex-col mx-4">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium bg-slate-300 dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Symbol 1
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Symbol 2
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Futures Price
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Call Exchange
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Call Price
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Call Price Side
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Put Exchange
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Put Price
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Put Price Side
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Arb Diff USD
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Arb Diff Perc
                  </th>
                </tr>
              </thead>
              <tbody>
                {arbs.arbs?.map((arb, index) => {
                  const {
                    item1Symbol,
                    item2Symbol,
                    futuresPrice,
                    callPricesUsed,
                    putPricesUsed,
                    arbDiffUSD,
                    arbDiffPerc
                  } = arb
                  const { callExch, price, priceSide } = callPricesUsed
                  const {
                    putExch,
                    price: putPrice,
                    priceSide: putPriceSide
                  } = putPricesUsed
                  return (
                    <TableRow
                      key={index}
                      arbsInfo={{
                        item1Symbol,
                        item2Symbol,
                        futuresPrice,
                        arbDiffUSD,
                        arbDiffPerc,
                        callExch,
                        price,
                        priceSide,
                        putExch,
                        putPrice,
                        putPriceSide
                      }}
                    />
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
