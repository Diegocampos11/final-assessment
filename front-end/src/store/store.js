import { configureStore } from '@reduxjs/toolkit'
import userDataReducer from '../store/userData'

export default configureStore({
  reducer: {
    userData: userDataReducer
  }
})