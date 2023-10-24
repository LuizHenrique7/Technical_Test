import React, { useState, useEffect } from 'react';
import axios from 'axios';



function format(value) { return value.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

function ProductList() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/products/")
            .then((response) => { const DecimalPrice = response.data.map((product) => ({...product, price: parseFloat(product.price),}));
        setProducts(DecimalPrice);
      })
            .catch((error) => console.error("Erro ao buscar produtos: ", error));
    },  []);


    return (<div>
      <h1>Product list</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Color</th>
                    <th>Product Type</th>
                    <th>Preço</th>
                    <th>Promotional Price</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (<tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.color}</td>
                        <td>{product.product_category}</td>
                        <td>{format(product.price)}</td>
                        <td>{format(product.promotional_price)}</td>

                </tr>
                ))}
                </tbody>
            </table>
    </div>
    );
}

export default ProductList;