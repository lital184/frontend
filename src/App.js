 import './App.css';
 import {useProducts} from "./hooks/useProducts";
 import {ProductsList} from './ProductsList';
 import {ProductFilter} from './ProductFilter';
 import DownloadCSVButton from './DownloadCSVButton';
 import YieldOverTimeChart from './YieldOverTimeChart';


function App() {
  
  const products = useProducts();
  console.log("products in app",products)

  return (
    <div className="App">
      <h1>Nvidia Home Assignment - Lital Hadad</h1>
      {/* <div className="center">
        <ProductFilter/>
        {products && products.length > 0  && <ProductsList products={products} />}
      </div>
      <DownloadCSVButton data={products} fileName="manufactor_raw_data" /> */}
      <YieldOverTimeChart/>
    </div>
  );
}

export default App;
