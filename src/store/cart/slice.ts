import { createSlice } from '@reduxjs/toolkit'

export interface CartState {
  items: [{ name: string, quantity: number, price: number }?];
}

const initialState: CartState = {
  items: [],
}

const {
  reducer,
  actions
} = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {
        name,
        quantity,
        price
      } = action.payload
      state.items.push({name, quantity, price})
    },
    removeFromCart: (state, action) => {
      state.items.splice(action.payload.index, 1);
    },
  },
  extraReducers: {},
})

export const {
  addToCart,
  removeFromCart,
} = actions

export { reducer }
