import React from "react"
import Hero from "./Hero"
import InfoParagraph from "./InfoParagraph"
import FindArbitrage from "./FindArbitrage"
import Table from "./Table"

const Info = () => {
  return (
    <>
      <div className="divider"></div>
      <Hero />
      <div className="divider"></div>
      <InfoParagraph />
      <div className="divider"></div>
      <FindArbitrage />
      <div className="divider"> </div>
      <Table />
      <div className="divider"></div>
    </>
  )
}

export default Info
