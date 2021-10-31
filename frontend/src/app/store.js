import { configureStore } from '@reduxjs/toolkit'
import matchReducer from './matchSlice'
import authReducer from './authSlice'
export default configureStore({
  reducer: {
      match: matchReducer,
      auth: authReducer
  },
})