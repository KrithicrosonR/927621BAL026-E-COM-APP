import React, { useState } from 'react';
import './App.css';

function App() {
  const [company, setCompany] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [topN, setTopN] = useState('');
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  const mockProducts = [
    { productName: 'Laptop 1', price: 2233, rating: 9.0, discount: 34, availability: 'yes' },
    { productName: 'Laptop 2', price: 1999, rating: 8.5, discount: 20, availability: 'yes' },
    { productName: 'Phone 1', price: 999, rating: 9.5, discount: 10, availability: 'no' },
    { productName: 'Monitor 1', price: 299, rating: 8.0, discount: 15, availability: 'yes' },
    { productName: 'Keyboard 1', price: 49, rating: 7.0, discount: 5, availability: 'yes' },
    // Add more mock products as needed
  ];

  const fetchProducts = (company, maxPrice, topN) => {
    // Mock filtering logic
    let filteredProducts = mockProducts.filter(product => product.price <= maxPrice);
    filteredProducts = filteredProducts.slice(0, topN);
    return filteredProducts;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company || !maxPrice || !topN) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    const products = fetchProducts(company, maxPrice, topN);
    setProducts(products);
  };

  return (
    <div className="App">
      <h1>Top Products for {company}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Company:
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Maximum Price:
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Top N Products:
            <input
              type="number"
              value={topN}
              onChange={(e) => setTopN(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <h2>Products:</h2>
        {products.length > 0 ? (
          <ul>
            {products.map((product, index) => (
              <li key={index}>
                {product.productName} - ${product.price} - Rating: {product.rating} - Discount: {product.discount}% - Availability: {product.availability}
              </li>
            ))}
          </ul>
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default App;
