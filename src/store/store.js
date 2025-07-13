import { configureStore } from "@reduxjs/toolkit";
// import {reducer as authFeature} from "../features/authSlicer";
import reducer from "../features/authSlicer";
// import {reducer as postFeature} from "../features/postSlicer";
// import {reducer as projectFeature} from "../features/projectSlicer";


const mainStore = configureStore({
    // we will add all the features directly here
    reducer: {
        auth: reducer,
        // postAuth: postFeature,
        // projectAuth: projectFeature
    }
})

export default mainStore