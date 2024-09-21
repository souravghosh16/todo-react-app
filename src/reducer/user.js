import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'sourav',
    address: 'ssss',
    NId: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        getUser: (state)=>{
            return state;
        }
    },    
})

export const { getUser } = userSlice.actions
export default userSlice.reducer
