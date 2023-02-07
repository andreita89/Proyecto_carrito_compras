import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainComponent from "./container/MainContainer/MainContainer";
import CartContainer from "./container/CartContainer/CartContainer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<MainComponent />}></Route>
        <Route path={"/cart"} element={<CartContainer />}></Route>
      </Routes>
    </>
  );
}

export default App;
