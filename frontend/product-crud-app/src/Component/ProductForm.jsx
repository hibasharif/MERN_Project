import React, { useState } from "react";
import axios from "axios";

function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: ""
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/products",
        product
      );
      console.log("Product created:", response.data);
      setSuccess("✅ Product created successfully!");
      setProduct({ name: "", description: "", price: "", category: "" });
    } catch (err) {
      console.error("Error creating product:", err);
      setError("❌ Failed to create product. Please try again later.");
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center">Add Product</h2>

        {/* Show messages */}
        {error && <p className="text-danger text-center">{error}</p>}
        {success && <p className="text-success text-center">{success}</p>}

        <div className="mb-3 mt-4">
          <input
            type="text"
            className="form-control"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Enter Product Name"
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Enter Product Description"
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter Product Price"
            required
            min="1"
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Enter Product Category"
            required
          />
        </div>

        <div className="text-center">
          <button
            className="btn btn-success"
            style={{ width: "200px" }}
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
