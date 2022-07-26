import Newin from "../new-in-block/NewIn";
import Footer from "./Footer";
import Header from "./Header";
import CartDataProvider from "./minicart/CartDataProvider";

const MainContainer = () => {
  return (
    <div id="wrapper" className="main-container">
      <Header></Header>
      <div className="middle-container">
        <CartDataProvider>
          <Newin />
        </CartDataProvider>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default MainContainer;
