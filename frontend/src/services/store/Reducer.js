import { createSlice ,current } from '@reduxjs/toolkit'
const initialState = {
    role: 'user'
}

const roleStore = createSlice({
    name: "setRole",
    initialState,
    reducers: {
        updateRole: (state, action) => {
            state.role = action.payload
            console.log(current(state))
        }
    }
}) 

export const { updateRole } = roleStore.actions
export default roleStore.reducer