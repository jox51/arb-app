import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getArbs } from "../features/arbs/arbsSlice"
import Spinner from "./Spinner"
import ReactAnimatedEllipsis from "react-animated-ellipsis"
// import { useTypewriter } from "react-simple-typewriter"

const FindArbitrage = () => {
  const dispatch = useDispatch()

  const { arbs, loading, loginResp } = useSelector((store) => store.arbs)
  const { amount } = arbs

  // const [text] = useTypewriter({
  //   words: ["finding arbs..."],
  //   loop: false,
  //   deleteSpeed: 80,
  //   typeSpeed: 90
  // })

  // arb results variables, item1Symbol,item2Symbol,expiration,item1Type,item2Type,strike,futuresPrice, callPricesUsed : {callExch,priceSide,price,strike,callBal}, putPricesUsed: {putExch,priceSide,price,futuresPrice, putBal}, arbDiffUSD,diffPerc

  const localHandler = () => {
    console.log("button clicked")
    dispatch(getArbs())
  }

  return (
    <section className="flex flex-col justify-center items-center gap-3 ">
      <div>
        <h1 className="text-lg font-semibold underline">
          Arbitrages Listed Below
        </h1>
      </div>
      <div>
        {loginResp.msg === "login success" ? (
          <button class="btn btn-primary" onClick={localHandler}>
            Find Arbitrages
          </button>
        ) : (
          <button
            class="btn btn-primary"
            disabled="true"
            onClick={localHandler}
          >
            Login To Find Arbs
          </button>
        )}
      </div>
      <div>{loading && <Spinner />}</div>
      <p>
        {!loading && (
          <h3 className="text-3xl font-medium leading-tight">
            Arbs Found:{" "}
            <small
              className={`${
                amount === 0 ? "text-red-600" : "text-green-600"
              } text-3xl dark:text-neutral-400`}
            >
              {amount}
            </small>
          </h3>
        )}
        {loading && (
          <h3 className="text-3xl font-medium leading-tight">
            {" "}
            Loading <ReactAnimatedEllipsis />{" "}
          </h3>
        )}
      </p>
    </section>
  )
}

export default FindArbitrage
