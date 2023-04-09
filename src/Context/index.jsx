import { createContext, useState } from "react";
export const Contexto = createContext();
function CustomProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  function addInCart(product, quantity) {
    const isProductAdded = isInCart(product);
    if (isProductAdded) {
      const findProduct = cartProducts.find(
        (cartProducts) => cartProducts.id === product.id
      );
      const modifiedProduct = {
        ...findProduct,
        quantity: findProduct.quantity + quantity,
      };
      setCartProducts((prevQuantity) =>
        prevQuantity.map((cartProducts) =>
          cartProducts.id === product.id ? modifiedProduct : cartProducts
        )
      );
    } else {
      setCartProducts((prevQuantity) =>
        prevQuantity.concat({ ...product, quantity })
      );
    }
  }
    const removeItem = (itemToRemove) => {
      setCartProducts((prevItems) => prevItems.filter(item => item !== itemToRemove));
  }
 
  function clear(){
    setCartProducts([]);
  }

  function isInCart(product) {
    return cartProducts.some((cartProducts) => cartProducts.id === product.id);
  }
  function getTotalPrice() {
    let totalPrice = 0;
    cartProducts.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  }
  return (
    <Contexto.Provider value={{addInCart,cartProducts, clear, removeItem,getTotalPrice }}>
      {children}
    </Contexto.Provider>
  );
}
export default CustomProvider;
