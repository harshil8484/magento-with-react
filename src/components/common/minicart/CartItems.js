import { cartData } from "./CartDataProvider";
import { useContext } from "react";

const CartItems = ({ showMiniCart }) => {
  const [cartItems, setCartItems] = useContext(cartData);

  return (
    <div className={`cart-items ${showMiniCart.showCart ? "active" : ""}`}>
      <button className="close" onClick={() => showMiniCart.openCart()}>
        <i className="fas fa-close"></i>
      </button>
      <h2>Shopping Cart</h2>
    </div>
  );
};
export default CartItems;
