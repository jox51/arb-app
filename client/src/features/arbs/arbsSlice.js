import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  loading: false,
  arbs: [],
  registerResp: "",
  loginResp: ""
}

const API_URL = import.meta.env.VITE_API_URL

export const getArbs = createAsyncThunk("getArbs/data", async (_, thunkAPI) => {
  // params passing user input
  const { loginResp } = thunkAPI.getState().arbs
  let config = {
    headers: {
      Authorization: `Bearer ${loginResp.token} `
    }
  }

  try {
    const resp = await axios(`${API_URL}/arbs/create`, config)
    return resp.data
  } catch (error) {
    return error.message
  }
})

export const registerUser = createAsyncThunk(
  "registerUser/data",
  async (registerInfo, thunkAPI) => {
    // params passing user input

    try {
      const resp = await axios.post(`${API_URL}/auth/register`, {
        data: {
          user: registerInfo
        }
      })
      return resp.data
    } catch (error) {
      return error.response
    }
  }
)
export const loginUser = createAsyncThunk(
  "loginUser/data",
  async (loginInfo, thunkAPI) => {
    // params passing user input

    try {
      const resp = await axios.post(`${API_URL}/auth/login`, {
        data: {
          user: loginInfo
        }
      })
      return resp.data
    } catch (error) {
      return error.response.data
    }
  }
)

const arbsSlice = createSlice({
  name: "arbs",
  initialState,
  reducers: {
    logoutUser: () => {
      return initialState
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArbs.pending, (state) => {
        state.loading = true
      })
      .addCase(getArbs.fulfilled, (state, { payload }) => {
        state.loading = false
        state.arbs = payload
      })
      .addCase(getArbs.rejected, (state, { payload }) => {
        state.loading = false
        console.log(payload)
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false
        state.registerResp = payload
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false
        console.log(payload)
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false
        state.loginResp = payload
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false
        console.log(payload)
      })
  }
})

export const { logoutUser } = arbsSlice.actions

export default arbsSlice.reducer
