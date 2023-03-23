require("dotenv").config()
//async errors
require("express-async-errors")
const express = require("express")
const app = express()
const cors = require("cors")

// imports reqd to run py script
const bodyParser = require("body-parser")

const connectDB = require("./db/connect")
const authRouter = require("./routes/auth")
const arbsRouter = require("./routes/arbs")
const notFound = require("./middleware/notFound")
const errorHandler = require("./middleware/errorHandlerMiddleware")

//authentication middleware
const authenticateUser = require("./middleware/authentication")

// parse json
app.use(express.json())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//routes. First arg is path. Below route where we will perform our API ops
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/arbs", authenticateUser, arbsRouter)
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    //connect DB
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`listening on port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
