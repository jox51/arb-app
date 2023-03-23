import React from "react"

const Footer = () => {
  const d = new Date()
  return (
    <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        © {d.getFullYear()} Copyright:{" "}
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="https://github.com/jox51/"
        >
          Dom Productions, Scanner Courtesy of{" "}
          <a href="https://cryptowizards.net" className="underline">
            Crypto Wizards
          </a>
        </a>
      </div>
    </footer>
  )
}

export default Footer
