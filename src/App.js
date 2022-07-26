import { render } from "react-dom";
import MainContainer from "./components/common/MainContainer";

const App = () => {
  return (
    <>
      <MainContainer></MainContainer>
    </>
  );
};

export default App;

render(<App />, document.querySelector("#root"));
