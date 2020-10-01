export const initialState = {
  user: "kamal",
  cart: [
    {
      priceNow: "199",
      pricewas: null,
      sku: "TX-32G302B",
      title: 'Panasonic TX-32G302B 32" 720p HD Ready TV',
    },
  ],
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
