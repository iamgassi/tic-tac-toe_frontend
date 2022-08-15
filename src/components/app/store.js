import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';
import socketReducer from "../features/socketData";

export default configureStore({
    reducer:{
        user:userReducer,
        data:socketReducer
    }
})