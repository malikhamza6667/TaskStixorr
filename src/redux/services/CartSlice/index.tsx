import { createSlice } from "@reduxjs/toolkit";

type IinitialState={
numberOfItems: number
items: any[],
quantity:number,

}
const initialState:IinitialState={
    numberOfItems:0,
    items:[],
    quantity:0
}

export const CartSlice= createSlice({
    name: 'CartSlice',
    initialState,
    reducers:{
       addToCart(state,action){
   
    const obj={...action.payload, quantity:1}
    state.items.push(obj)
    state.numberOfItems=state.items.length
    },
    removeFromCart(state,action){
const filter=state.items.filter((i)=> i.title !==action.payload.title && i.id !==action.payload.id )
state.items=filter    
state.numberOfItems=state.items.length
},
addQuantity(state,action){
  

    state.items[action.payload]={...state.items[action.payload],quantity:state.items[action.payload].quantity +1}
   


},
removeQuantity(state,action){
    
    state.items[action.payload]={...state.items[action.payload],quantity:state.items[action.payload].quantity -1}
   
    if(state.items[action.payload].quantity== 0  ){
     
        const filter=state.items.filter((i,index)=> index !== action.payload )
       state.items=filter
       state.numberOfItems=state.items.length
    }
   
   
}
    }
})

export const {removeFromCart,addToCart,removeQuantity,addQuantity} = CartSlice.actions

export default CartSlice.reducer