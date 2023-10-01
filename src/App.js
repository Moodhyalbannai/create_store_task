import logo from './logo.svg';
import './App.css';
import products from "./products"

function App() {

  const productsLists = products.map ((product)=>{
    return(

      <div className = "card">
        <img src={product.image}></img>
        <div class="titleAndPrice">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
          </div>
      </div>

    )
  })
  
  return (

    <div>



  <div className="App">
    <div className="App-header">
      <h1>My Furniture Store</h1>
      <h4>Fin!</h4>

      <div class="lazzoni-store-frame">
      <img class="lazzoni-store-img" src="https://cdn.shopify.com/s/files/1/0568/6362/1297/files/Parasmus-2.2_cdbf7619-1bf5-4d58-805a-33bfb9b6070b.jpg?v=1676368658"/>
      </div>

    </div>

  </div>
    <div class="card-frame">{productsLists}</div>



    </div>
  );
}

export default App;
