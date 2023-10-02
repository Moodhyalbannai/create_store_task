import logo from "./logo.svg";
import "./App.css";
import products from "./products";
import { Home } from "./components/Home";
import ProductsLists from "./components/ProductsLists";

function App() {
  return (
    <div>
      <Home />
      <ProductsLists />
    </div>
  );
}

export default App;
