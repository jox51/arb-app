import { configureStore } from "@reduxjs/toolkit"

import arbsSlice from "./src/features/arbs/arbsSlice"

export const store = configureStore({
  reducer: {
    arbs: arbsSlice
  }
})
