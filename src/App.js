 import './App.css';
 import {useProducts} from "./hooks/useProducts";
 import {ProductsList} from './ProductsList';
 import {ProductFilter} from './ProductFilter';
 import DatePicker from "react-datepicker";

function App() {
  
  const products = useProducts();
  console.log("products in app",products)

  return (
    <div className="App">
      <h1>Nvidia Home Assignment - Lital Hadad</h1>
      <div className="center">
        <ProductFilter/>
        {products && products.length > 0  && <ProductsList products={products} />}
      </div>
    </div>
  );
}

export default App;
