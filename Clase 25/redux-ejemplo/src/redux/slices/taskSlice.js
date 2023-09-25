import {createSlice} from '@reduxjs/toolkit';

const listaInicial=[
    {id:"1",
    data:"tarea1"
},
    {id:"2",
    data:"tarea2"
}];

export const taskSlice=createSlice({
    name:'tarea',
    initialState:listaInicial,
    reducers:{
        agregarTarea:(state,action)=>{
            console.log(state,action)
            state.push(action.payload)
        },
        eliminarTarea:()=>{
            console.log("hola")
        }
    }
});

export const{agregarTarea,eliminarTarea}=taskSlice.actions;
export default taskSlice.reducer

// actions -> type: nombreDeAccion payload->que hay que hacer e incluso pasar info
