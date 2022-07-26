import { createContext, useEffect, useState } from "react";

export const cartData = createContext();

const CartDataProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {});
  return (
    <cartData.Provider value={[cartItems, setCartItems]}>
      {children}
    </cartData.Provider>
  );
};

export default CartDataProvider;
