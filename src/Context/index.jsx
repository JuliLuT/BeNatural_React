import { createContext, useState } from "react";
import {
  collection,
  getFirestore,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
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
    setCartProducts((prevItems) =>
      prevItems.filter((item) => item !== itemToRemove)
    );
  };

  function clear() {
    setCartProducts([]);
  }
  const db = getFirestore();
  const sendOrder = (name, email, phone) => {
    const totalBuy = cartProducts.reduce((total, product) => total + product.quantity * product.price, 0);
    const order = {
      buyer: {
        name: name,
        email: email,
        phone: phone,
      },
      items: cartProducts,
      totalBuy,
    };
    const collectionRef = collection(db, 'orders');
    addDoc(collectionRef, order)
      .then((data) => {
        const orderId = data.id;
        setOrderId(orderId);
        cartProducts.forEach((product) => {
          const updatedStock = product.stock - product.quantity;
          updateDoc(doc(db, 'products', product.id), { stock: updatedStock });
        });
      })
      .catch((error) =>
   console.log({ error }));
  }
  function updateOrder(productId, updatedStock) {
    const itemToUpdate = doc(db, "Items", productId);
    updateDoc(itemToUpdate, { stock: updatedStock });
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
    <Contexto.Provider
      value={{
        addInCart,
        cartProducts,
        clear,
        removeItem,
        getTotalPrice,
        sendOrder,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}
export default CustomProvider;
