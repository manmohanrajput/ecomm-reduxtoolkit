import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../featurs/slices/SliderSlice";
import ProductsReducer from "../featurs/slices/ProductsSlice";
import cartReducer from "../featurs/slices/CartSlice";

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products:ProductsReducer,
    cart:cartReducer,
  },
});
