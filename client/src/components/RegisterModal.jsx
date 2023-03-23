import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../features/arbs/arbsSlice"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const RegisterModal = () => {
  const dispatch = useDispatch()
  const { registerResp } = useSelector((store) => store.arbs)
  const [user, setUser] = useState({ name: "", email: "", password: "" })

  const formHandler = (e) => {
    e.preventDefault()
    let errorMsg = ""
    dispatch(registerUser(user))

    if (registerResp.data !== "") {
      const { msg } = registerResp
      errorMsg = msg
    }

    if (errorMsg !== "") {
      toast.error(errorMsg)
    }
    if (registerResp?.msg === "User created successfully") {
      toast.success("User created, please login")
    }
  }

  return (
    <>
      <article>
        <input className="modal-state " id="registerModal" type="checkbox" />
        <div
          className={`modal ${
            registerResp.msg === "User created successfully" ? "hidden" : ""
          }`}
        >
          <form onSubmit={(e) => formHandler(e)}>
            <label className="modal-overlay" htmlFor="registerModal"></label>
            <div className="modal-content flex w-full flex-col gap-5 p-7">
              <label
                htmlFor="registerModal"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </label>
              <div className="flex flex-col gap-2">
                <h2 className="text-center text-2xl font-semibold">Register</h2>
                <p className="mx-auto max-w-xs text-sm text-content2">
                  Register your account to begin using our software
                </p>
              </div>

              <section>
                <div className="form-group">
                  <div className="form-field">
                    <label className="form-label">Name</label>
                    <input
                      placeholder="Name"
                      type="text"
                      className="input max-w-full"
                      value={user.name}
                      onChange={(e) =>
                        setUser((prevState) => ({
                          ...prevState,
                          name: e.target.value
                        }))
                      }
                    />
                    <label className="form-label">Email address</label>
                    <input
                      placeholder="Email"
                      type="email"
                      className="input max-w-full"
                      value={user.email}
                      onChange={(e) =>
                        setUser((prevState) => ({
                          ...prevState,
                          email: e.target.value
                        }))
                      }
                    />
                    <label className="form-label">
                      <span className="form-label-alt">
                        Please enter a valid email.
                      </span>
                    </label>
                  </div>

                  <div className="form-field">
                    <label className="form-label">
                      <span>Password</span>
                    </label>
                    <div className="form-control">
                      <input
                        placeholder="Password"
                        type="password"
                        className="input max-w-full"
                        minLength={6}
                        value={user.password}
                        onChange={(e) =>
                          setUser((prevState) => ({
                            ...prevState,
                            password: e.target.value
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <div className="form-control justify-between"></div>
                  </div>

                  <div className="form-field pt-5">
                    <div className="form-control justify-between">
                      <button className="btn btn-primary w-full">
                        Sign in
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </form>
        </div>
      </article>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default RegisterModal
