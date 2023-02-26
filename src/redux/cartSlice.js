import {createSlice} from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:"carttts",
    initialState:{
        items:[]
    },
    reducers:{
        additem:(state,action)=>{
         state.items.push(action.payload)
         console.log(action.payload)
        },
        clearCart:(state)=>{

       state.items=[]
        },
        removeItem:(state,action)=>{

            state.items.pop(action.payload)
             }
    }
})


export default cartSlice.reducer;

export const {additem,clearCart,removeItem} =cartSlice.actions ;