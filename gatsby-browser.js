import React from "react"
import { StateProvider } from "./src/Context/StateProvider"
const wrapRootElement = ({ element }) => {
  return <StateProvider>{element}</StateProvider>
}

export { wrapRootElement }
