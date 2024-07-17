import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/DummyData";

export const ProductsSlice  = createSlice({
    name: "products",
    initialState :{
      filteredProducts:JSON.parse(sessionStorage.getItem("filterData")) || storeData,
      singleProduct:JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
      error: false,
},

reducers:{
     filterProducts(state,action){
        try{
          const filter = storeData.filter(
            (product) =>product.type === action.payload
          );
          state.filteredProducts = filter;
        state.error = false;

          console.log("filter",filter)
          const savedState = JSON.stringify(filter);
          sessionStorage.setItem("filterdata",savedState)
        }catch(err){
            return err;
        }
     },
},

singleProduct(state,action){
    try{
        const oneProduct = storeData.filter(
            (product)=>product.id === action.payload
        );
        state.singleProduct = oneProduct;
        const savedState = JSON.stringify(oneProduct);
        sessionStorage.setItem("oneProduct",savedState);

    }catch(err){
        return err;
    }
}

})
export const{filterProducts,singleProduct} = ProductsSlice.actions;
export default ProductsSlice.reducer;