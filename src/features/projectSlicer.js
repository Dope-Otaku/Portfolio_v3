/*
in this file we will add logic which will handle all the projects related thing
*/

import { createSlice } from "@reduxjs/toolkit"

const projectInitialState = {
    projectData: null
}

const projectSlicer = createSlice({
    name: "projectAuth",
    initialState: projectInitialState,
    reducers: {
        addProject:()=>{},
        updateProject:()=>{},
        deleteProject:()=>{},
        readProject:()=>{}
    }
})

export const {addProject, updateProject, deleteProject, readProject} = projectSlicer.actions

export default projectSlicer.reducer