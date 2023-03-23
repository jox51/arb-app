import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import RegisterModal from "./RegisterModal"
import LoginModal from "./LoginModal"
import { logoutUser } from "../features/arbs/arbsSlice"

const Navbar = () => {
  const dispatch = useDispatch()
  const { registerResp, loginResp } = useSelector((store) => store.arbs)

  const logoutHandler = () => {
    dispatch(logoutUser())
  }
  return (
    <div className="navbar flex justify-center items-center max-w-xl md:max-w-full">
      <div className="navbar-start px-2 ">
        <Link to={"/"} className="navbar-item">
          Simples Arbitrage Finder
        </Link>
      </div>
      <div className="navbar-end px-3">
        <Link to={"/"} className="navbar-item">
          Home
        </Link>
        <Link to={"/about"} className="navbar-item">
          About
        </Link>
        <Link to={"/contact"} className="navbar-item">
          Contact
        </Link>
        {registerResp.msg === "User created successfully" ||
          (loginResp.msg === "login success" ? (
            <label className="hidden btn btn-primary " htmlFor="registerModal">
              Register
            </label>
          ) : (
            <label className="btn btn-primary " htmlFor="registerModal">
              Register
            </label>
          ))}

        {registerResp.msg !== "User created successfully" && <RegisterModal />}

        {loginResp.msg === "login success" ? (
          <button className="btn btn-primary" onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <label className="btn btn-primary " htmlFor="loginModal">
            Login
          </label>
        )}
        {loginResp.msg === "login success" ? (
          <div className="hidden">
            <LoginModal />{" "}
          </div>
        ) : (
          <LoginModal />
        )}
      </div>
    </div>
  )
}

export default Navbar
