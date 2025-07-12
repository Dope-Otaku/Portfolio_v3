/*
in this file we will add logic which will handle al the dynamic things such as post name, description , image, adding new skills, updating profile,
resume cover, etc
*/

import { createSlice } from "@reduxjs/toolkit"

const postInitialState = {
    postData: null
}

const postSlicer = createSlice({
    name: "postAuth",
    initialState: postInitialState,
    reducers: {
        addPost:()=>{},
        updatePost:()=>{},
        deletePost:()=>{},
        readPost:()=>{}
    }
})

export const {addPost, updatePost, deletePost, readPost} = postSlicer.actions

export default postSlicer.reducer