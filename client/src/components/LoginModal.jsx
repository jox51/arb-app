import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../features/arbs/arbsSlice"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const LoginModal = () => {
  const dispatch = useDispatch()
  const { loginResp } = useSelector((store) => store.arbs)
  const [user, setUser] = useState({ email: "", password: "" })

  const formHandler = (e) => {
    let errorMsg = ""
    e.preventDefault()

    if (loginResp.data !== "") {
      const { msg } = loginResp
      errorMsg = msg
    }
    dispatch(loginUser(user))
    if (errorMsg !== "") {
      toast.error(errorMsg)
    }
  }

  return (
    <>
      <article>
        <input className="modal-state" id="loginModal" type="checkbox" />

        <div className="modal">
          <form onSubmit={(e) => formHandler(e)}>
            <label className="modal-overlay" htmlFor="loginModal"></label>
            <div className="modal-content flex w-full flex-col gap-5 p-7">
              <label
                htmlFor="loginModal"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </label>
              <div className="flex flex-col gap-2">
                <h2 className="text-center text-2xl font-semibold">Login</h2>
                <p className="mx-auto max-w-xs text-sm text-content2">
                  Login to find Arbs
                </p>
              </div>

              <section>
                <div className="form-group">
                  <div className="form-field">
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
                      <button className="btn btn-primary w-full">Login </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </form>
        </div>
      </article>
      <ToastContainer
        limit={1}
        position="top-center"
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

export default LoginModal
