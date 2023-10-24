import React, { useState } from 'react';
import axios from 'axios';
function ProductForm({ onProductSubmit }) {
  const [product, setProduct] = useState({name: '', description: '', color: '', product_category: '', price: '',});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });};
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/products/', product)
      .then((response) => {
        if (onProductSubmit) {onProductSubmit(response.data);}
        setProduct({name: '', description: '', color: '', product_category: '', price: '',});
      })
      .catch((error) => { console.error('Erro ao cadastrar o produto: ', error); });
  };



  return (

    <form onSubmit={handleSubmit} className="class-container">
      <div className="class-input">
        <label className="class-label" htmlFor="name">Name: </label>
        <input type="text" name="name" value={product.name} onChange={handleInputChange} required/>
      </div>
      <div className="class-input">
        <label className="class-label" htmlFor="description">Description: </label>
        <input type="text" name="description" value={product.description} onChange={handleInputChange} required/>
      </div>
      <div className="class-input">
        <label className="class-label" htmlFor="color">Color: </label>
        <input type="text" name="color" value={product.color} onChange={handleInputChange} required/>
      </div>
      <div className="class-input">
        <label className="class-label" htmlFor="product_category">Category: </label>
        <select className="class-select" name="product_category" value={product.product_category} onChange={handleInputChange} required>

          <option value="">Select the category</option>
          <option value="Eletrodomésticos">Appliances</option>
          <option value="Furniture">Furniture</option>
          <option value="Refrigerators">Refrigerators</option>
          <option value="Smartphones">Smartphones</option>
          <option value="Electronics">Electronics</option>

        </select>
      </div>
      <div className="class-input">
        <label className="class-label" htmlFor="price">Price: </label>
        <input type="text" name="price" value={product.price} onChange={handleInputChange} required />
      </div>
      <button className="send-button" type="submit">Send</button>
    </form>
  );
}


export default ProductForm;
