/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateAreas: {
        layout: [
          "first-card first-card .",
          ". second-card second-card",
          "third-card third-card ."
        ]
      },
      gridTemplateColumns: {
        layout: "1fr 1fr 1fr"
      },
      gridTemplateRows: {
        layout: "1fr 1fr 1fr"
      }
    }
  },

  plugins: [
    require("rippleui"),
    require("@savvywombat/tailwindcss-grid-areas")
  ],
  rippleui: {
    // themes: [
    //   {
    //     themeName: "light",
    //     colorScheme: "light",
    //     colors: {
    //       primary: "#235264",
    //       backgroundPrimary: "#f1f5f9"
    //     }
    //   },
    //   {
    //     themeName: "dark",
    //     colorScheme: "dark",
    //     colors: {
    //       primary: "#573242",
    //       backgroundPrimary: "#1a1a1a"
    //     }
    //   }
    // ]
  }
}

// daisyui: {
//   themes: [
//     {
//       gunmetal: {
//         primary: "#99B6CC",
//         secondary: "#576152",
//         accent: "#A3AE9E",
//         neutral: "#D0EEFF",
//         "base-100": "#e7ebe5",
//         info: "#0000FF",
//         success: "#008000",
//         warning: "#A6A659",
//         error: "#FF0000"
//       }
//     }
//   ]
// },
