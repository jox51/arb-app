import React from "react"

const InfoParagraph = () => {
  return (
    <section>
      <article>
        <p
          class="mx-auto mt-6 mb-4 text-xl font-light leading-relaxed max-w-lg"
          id="learnmore"
        >
          With this app, you can detect arbitrage opportunities between the
          Delta exchange and Deribit exchange. This app scans all options on
          both of these exchanges and looks for arbitrages by using Put-Call
          Parity. If an arbitrage is found, it will list it on here.
        </p>
      </article>
    </section>
  )
}

export default InfoParagraph
