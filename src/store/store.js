const { configureStore, createSlice } = require("@reduxjs/toolkit")

const mainSlice = createSlice({
    name: "hello",
    initialState: {},
    reducers:{}
})

const mainStore = configureStore({
    reducer: mainSlice.reducer
})