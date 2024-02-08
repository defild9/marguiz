import { combineReducers } from '@reduxjs/toolkit'
import teamsReducer from './teamSlice'

const rootReducer = combineReducers({
  teams: teamsReducer,
})

export default rootReducer
