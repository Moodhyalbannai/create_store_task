import logo from './logo.svg';
import './App.css';
import products from "./products"

function App() {

  const productsLists = products.map ((product)=>{
    return(

      <div className = "card">
        <img src={product.image}></img>
        <div className="titlePrice">
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
      
        <div className="logo-storeName-slogan-frame">
          <div className="logo-storeName">
            <img className="logo" src="https://www.nicepng.com/png/detail/17-178633_nest-logo-chair-png-from-coefficient-design-interiors.png"></img>
            <h1>Lazzoni</h1>
          </div>
          <h4>Crafted with Excellence</h4>
          </div>
      
      <div className="shadow-overlay"></div>
     

    </div>

  </div>
    <div className="card-frame">{productsLists}</div>



    </div>
  );
}

export default App;
