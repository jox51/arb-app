// import model/schema to initiate actions
const Arbs = require("../models/arbs")

const createArb = async (req, res) => {
  console.log(req)
  const main = await import(
    "../public/put-call-parity/put-call-parity-options-arb/main.mjs"
  )

  const execArb = await main.findArbs()

  // const python = await fork(
  //   "public/put-call-parity/put-call-parity-options-arb/main.mjs",
  //   { options: { stdio: "inherit" } }
  // )

  //collect data from script
  // python.stdout.on("data", function (data) {
  //   dataToSend = data.toString()
  // })

  // python.stderr.on("data", (data) => {
  //   console.error(`stderr : ${data}`)
  // })

  // in close event, ensure stream from child process is closed
  // python.on("exit", (code) => {
  //   console.log(`child process exited with code ${code}, ${dataToSend}`)
  //   res.json({ msg: dataToSend })
  // })

  res.send(execArb)
  // const appt = await Appt.create(req.body)
  // res.status(200).json({ arb: req.body })
}

module.exports = {
  createArb
}
