import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { ITeam } from '@/common/models/Team'

interface TeamState {
  teams: ITeam[]
}

const initialState: TeamState = {
  teams: [],
}

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    addTeam: (state: TeamState, action: PayloadAction<ITeam>) => {
      state.teams.push(action.payload)
    },
  },
})

export const { addTeam } = teamSlice.actions

export default teamSlice.reducer
