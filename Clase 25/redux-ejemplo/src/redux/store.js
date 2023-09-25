import {configureStore} from "@reduxjs/toolkit";
import taskSlice from './slices/taskSlice';

export const store=configureStore({
    reducer:{
        tareas:taskSlice
    }
});

//configurar store 