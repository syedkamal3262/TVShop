import React, { createContext, useContext, useReducer } from "react"
import { reducer, initialState } from "./Reducer"
//this data layer
export const StateContext = createContext()

//build a provider
export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

//this is how we use it inside a component
export const useStateValue = () => useContext(StateContext)
