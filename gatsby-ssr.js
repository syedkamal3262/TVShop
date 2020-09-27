const React = require("react")
const { StateProvider } = require("./src/Context/StateProvider")

exports.wrapRootElement = ({ element }) => {
  return <StateProvider>{element}</StateProvider>
}
