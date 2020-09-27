export const initialState = {
  user: "kamal",
  cart: ["VEL32FO01UK"],
}

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        cart: [...state.cart, action.item],
      }

    default:
      return { state }
  }
}
