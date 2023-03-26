import { createContext, useState } from "react";
export const Contexto = createContext();
function CustomProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  console.log(cartProducts)
  
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
  function removeItem(itemId){}
  function clear(){}

  function isInCart(product) {
    return cartProducts.some((cartProducts) => cartProducts.id === product.id);
  }
  return (
    <Contexto.Provider value={{ cartProducts, addInCart }}>
      {children}
    </Contexto.Provider>
  );
}
export default CustomProvider;
