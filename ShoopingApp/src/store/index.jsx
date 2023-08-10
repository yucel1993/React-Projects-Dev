import { combineReducers, legacy_createStore as createStore } from "redux"
import { itemsReducer } from "./ItemsReducer"


const rootReducer=combineReducers({
    items:itemsReducer,
})

// created store
export const store = createStore(rootReducer)