
import {toastSuccessNotify} from '../helper/ToastNotify'

export const DEL_LINE = 'DEL_LINE'
export const CLEAR='CLEAR'
export const NEW_ITEM='NEW_ITEM'
export const ADD_LINE='ADD_LINE'
export const DEC_LINE='DEC_LINE'

export const delBasketLine=(payload)=>({type:DEL_LINE,payload})
export const addNewLine=(payload)=>({type:ADD_LINE,payload})
export const basketClear=()=>({type:CLEAR})
export const new_item=(payload)=>({type:NEW_ITEM,payload})
export const dec_line=(payload)=>({type:DEC_LINE,payload})

const initialState = {
    count:0,
    products:[]
}

export const itemsReducer = (state = initialState, {type,payload}) => {
  switch (type) {

  case ADD_LINE:
    return{count:state.count + 1,products:state.products.map((item)=>item.id == payload.id ? {...item,itemQuantity:item.itemQuantity + 1}:item)}

  case DEC_LINE:
    if(payload.itemQuantity == 1){
      return{count:state.count-payload.itemQuantity,products:state.products.filter((item)=>item.id != payload.id)}
    }
    else{
      return{count:state.count - 1,products:state.products.map((item)=>item.id == payload.id ? {...item,itemQuantity:item.itemQuantity - 1}:item)}
    }
    

  case DEL_LINE:
    return{count:state.count-payload.itemQuantity,products:state.products.filter((item)=>item.id != payload.id)}
    
  case CLEAR:
    return {products:[],count:0}
  
  case NEW_ITEM:

    if(state.products.some(item=>item.id == payload.id)){
      return {count:state.count + 1,products:state.products.map((item)=>item.id == payload.id ? {...item,itemQuantity: item.itemQuantity + 1,itemPrice:item.itemPrice * item.itemQuantity }:item)}
    }
    else{
      return{count:state.count + 1,products:[...state.products,{id:payload.id,itemName:payload.title,itemQuantity:1,itemPrice:payload.price}]}  
    }
    
    
  default:
    return state
  }
}



