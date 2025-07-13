/*
in this file we will mainly expose controls for login, logout mechanism and not of register!
*/

import { createSlice } from "@reduxjs/toolkit"

const authInitialState = {
    status: false, //id current status whether active or not
    userData : null //other data such as username, password, sessionID, etc. we don't need to add everything here we can just destructure it here.
}


const authSlicer = createSlice({
    name: "auth",
    initialState: authInitialState,
    reducers:{
        login:(state, action)=>{
            state.status = true,
            state.userData = action.payload
        },
        logout:(state, action)=>{
            state.status = false,
            state.userData = null
        },
        fgPassword:()=>{}
    }
})

export const {login, logout, fgPassword} = authSlicer.actions
export default authSlicer.reducer