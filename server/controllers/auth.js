const { StatusCodes } = require("http-status-codes")
const User = require("../models/user")
const { BadRequestError, UnauthenticatedError } = require("../errors")

const register = async (req, res) => {
  const { name, email, password } = req.body.data.user
  const user = await User.create({ ...req.body.data.user })

  res.status(StatusCodes.CREATED).json({ msg: "User created successfully" })
}
const login = async (req, res) => {
  const { email, password } = req.body.data.user

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password")
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials")
  }

  // compares password with db. Calls fx created in the schema
  const isPasswordValid = await user.comparePassword(password)
  if (!isPasswordValid) {
    throw new UnauthenticatedError("Invalid Credentials")
  }

  // creates jwt token, sends token back to client
  const token = user.createJWT()
  res
    .status(StatusCodes.OK)
    .json({ user: user.name, token, msg: "login success" })
}

module.exports = {
  register,
  login
}
