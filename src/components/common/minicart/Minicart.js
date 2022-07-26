import { useState } from "react";
import CartItems from "./CartItems";
const MiniCart = () => {
  const [showCart, setShowCart] = useState(false);
  const openCart = () => {
    setShowCart(!showCart);
  };
  return (
    <div className="minicart-block">
      <div>
        <button onClick={openCart} className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
        </button>

        <CartItems showMiniCart={{ showCart, openCart }}></CartItems>
      </div>
    </div>
  );
};

export default MiniCart;
