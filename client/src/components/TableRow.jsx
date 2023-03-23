import React from "react"

const TableRow = ({
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
}) => {
  return (
    <tr className="border-b transition duration-300 ease-in-out hover:bg-slate-200 dark:border-neutral-500 dark:hover:bg-neutral-600">
      <td className="whitespace-nowrap px-6 py-4 font-medium">{item1Symbol}</td>
      <td className="whitespace-nowrap px-6 py-4">{item2Symbol}</td>
      <td className="whitespace-nowrap px-6 py-4">{futuresPrice}</td>
      <td className="whitespace-nowrap px-6 py-4">{callExch}</td>
      <td className="whitespace-nowrap px-6 py-4">{price}</td>
      <td className="whitespace-nowrap px-6 py-4">{priceSide}</td>
      <td className="whitespace-nowrap px-6 py-4">{putExch}</td>
      <td className="whitespace-nowrap px-6 py-4">{putPrice}</td>
      <td className="whitespace-nowrap px-6 py-4">{putPriceSide}</td>
      <td className="whitespace-nowrap px-6 py-4">{arbDiffUSD}</td>
      <td className="whitespace-nowrap px-6 py-4">{arbDiffPerc}</td>
    </tr>
  )
}

export default TableRow
