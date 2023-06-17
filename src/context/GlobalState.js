import React,{createContext , useReducer} from "react";
import AppReducer from "./AppReducer";
const intialState = {
    transactions : [
        {id:1, text:'flower',amount:-20},
        {id:2,text:'rainbow',amount:300},
        {id:3,text:'water',amount:250},
        {id:4,text:'gas',amount:30}
    ]
}
//create context
export const GlobalContext = createContext(intialState);
//providerComponent
export const GlobalProvider = ({children}) =>
{
   const [state,dispatch] = useReducer(AppReducer,intialState);
   return(<GlobalContext.Provider value={{
    transactions : state.transactions
   }}>
    {children}
   </GlobalContext.Provider>
   )
}