

const cartReducer = (state,action) => {
    if(action.type === "ADD_TO_CART"){
        let{id,color,amount,product} = action.payload;
    


        let existingProduct = state.cart.find(
          (curItem) => curItem.id == id + color)

        if (existingProduct) {

          let updatedProduct = state.cart.map ((curELem) => {
            if(curELem.id == id + color){
              let newAmount = curELem.amount + amount;
              

              if (newAmount >= curELem.max) {
                newAmount = curELem.max;
              }
            return{
              ...curELem,
              amount: newAmount,
            }
            }
            else {
              return curELem;
            }
            })
            return {
              ...state,
              cart:updatedProduct
            }

        }else {
       let cartProduct = {
      id: id + color,
      name: product.name,
      color,
      amount,
      image: product.image[0].url,
      price: product.price,
      max: product.stock,
    };
  
  return {
    ...state,
    cart:[...state.cart,cartProduct],
  }
}
}

if (action.type === "SET_DECREMENT"){
    let updatedProduct = state.cart.map((curELem) => {
      if(curELem.id === action.payload){
        let decAmount = curELem.amount -1;
        

        if (decAmount < 1) {
              decAmount=1;
        }
        return{
          ...curELem,
          amount: decAmount,
        };
        }else {
          return curELem;
        }
    })
    return {
      ...state.cart,
      cart:updatedProduct
    }
}

if (action.type === "SET_INCREMENT"){
  let updatedProduct = state.cart.map((curELem) => {
    if(curELem.id === action.payload){
      let incAmount = curELem.amount  + 1;
      

      if (incAmount > curELem.max) {
            incAmount = curELem.max;
      }
      return{
        ...curELem,
        amount: incAmount,
      };
      }else {
        return curELem;
      }
  })
  return {
    ...state.cart,
    cart:updatedProduct
  }
}


if (action.type === "REMOVE_ITEM") {
  let updatedCart = state.cart.filter
  ((curItem) => curItem.id  !== action.payload)
  return {
    ...state,
    cart:updatedCart,

  }
}
if (action.type=== "CLEAR_CART" ){
return {
  ...state,
  cart:[]
}
}


if (action.type=== "CART_TOTAL_ITEMS"){
  let updatedItemVal = state.cart.reduce ((intialVal,curELem) => {
    
    let {amount } = curELem;
    intialVal = intialVal + amount;
    return intialVal;
  } ,0)


  return {
    ...state,
    total_item:updatedItemVal
  }
}

return state;
}

export default cartReducer