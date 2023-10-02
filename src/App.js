import logo from "./logo.svg";
import "./App.css";
import products from "./products";
import { Home } from "./components/Home";

function App() {
  const productsLists = products.map((product) => {
    return (
      <div className="card">
        <img src={product.image}></img>
        <div className="titlePrice">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Home />
      <div className="card-frame">{productsLists}</div>
    </div>
  );
}

export default App;
