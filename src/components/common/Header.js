import logo from "../../images/logo.png";
import Categories from "./categories/Categories";
import MiniCart from "./minicart/Minicart";
import CartDataProvider from "./minicart/CartDataProvider";

const Header = () => {
  return (
    <header>
      <div className="header-block">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="categories">
          <Categories></Categories>
        </div>
        <CartDataProvider>
          <MiniCart />
        </CartDataProvider>
      </div>
    </header>
  );
};

export default Header;
