import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(() => setError("Failed to fetch products"));
  }, []);

  // Delete handler
  const handleDelete = async (id) => {
    console.log("Deleting product with id:", id); // Add this line
    try {
      const response = await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      setError("Error deleting product.");
      console.error("Error deleting product:", error.response?.data || error);
    }
  };

  // Edit handler (show alert for now, you can add modal later)
  const handleEdit = (product) => {
    alert(`Edit product: ${product.name}`);
    // You can open a modal here for editing
  };

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      {error && <p>{error}</p>}
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product._id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
              <span>
                <strong>{product.name}</strong> - {product.price}
              </span>
              <span>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(product)}
                  title="Edit"
                  style={{ marginRight: "10px" }}
                >✏️</button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(product._id)}
                  title="Delete"
                >🗑️</button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
