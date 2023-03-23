import React from "react"
import { useForm, ValidationError } from "@formspree/react"

const Contact = () => {
  return (
    <>
      <div className="container py-20 px-6 mx-auto">
        <div className="divider"></div>
        <section className="mb-6 text-gray-800">
          <div className="flex flex-wrap">
            <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-7/12 px-3 lg:px-6">
              <h2 className="text-3xl font-bold mb-6">
                Frequently asked questions
              </h2>
              <p className="font-bold mb-2">Am I a Financial Advisor?</p>
              <p className="text-gray-500 mb-6">
                No, usage of this tool is solely for educational purposes and
                any real funds used to trade is at the sole discretion of the
                end user. We take no part in any funds deposited and transacted
                on any crypto platform.
              </p>
              <p className="font-bold mb-2">
                Have You Used This Tool To Make Money?
              </p>
              <p className="text-gray-500 mb-6">
                No, this tool is solely for educational purposes and is not
                meant to make any financial or investment decisions.
              </p>
              <p className="font-bold mb-2">
                Who should I contact if I have any questions or concerns?
              </p>
              <p className="text-gray-500 mb-6">
                Use the form on this page and the owner will reply answering any
                questions or concerns you may have.
              </p>

              <p className="font-bold mb-2">Can you build a web site for me?</p>
              <p className="text-gray-500">
                Possibly, use the contact form on this page and we can initiate
                conversations about your project.
              </p>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full md:w-5/12 px-3 lg:px-6">
              <p className="font-bold mb-6">
                Didn't find your answer in the FAQ? Contact our web developer.
              </p>
              <form action="https://formspree.io/f/xjvdeebr" method="POST">
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="name"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="email"
                    name="email"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group mb-6">
                  <textarea
                    className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                    id="message"
                    rows="3"
                    placeholder="Message"
                    name="message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="
              w-full
              px-6
              py-2.5
              bg-blue-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div className="divider"></div>
    </>
  )
}

export default Contact
