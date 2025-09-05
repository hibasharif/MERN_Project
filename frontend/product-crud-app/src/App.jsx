import ProductForm from "./Component/ProductForm";
import ProductList from "./Component/ProductList";
import "./Component/ProductList.css";

function App() {
  return (
    <div>
      <h1 className="page-title">MERN Product App</h1>
      <div className="main-wrapper">
        <div className="form-card">
          <ProductForm />
        </div>
        <div className="divider"></div>
        <ProductList />
      </div>
    </div>
  );
}

export default App;
