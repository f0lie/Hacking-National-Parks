import { createSlice } from '@reduxjs/toolkit'

export const matchSlice = createSlice({
  name: 'match',
  initialState: {
    location: undefined // note: an object, not a string
  },
  reducers: {
    setType: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.type = action.payload
    },
    setLocation: (state, action) => {
        state.location = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLocation } = matchSlice.actions

export default matchSlice.reducer