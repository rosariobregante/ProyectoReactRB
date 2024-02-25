// En ProductsPage.js

import React, { Component } from 'react';

class ProductsPage extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    // conectar a API REST y obtener los productos
    fetch('https://api.example.com/products')
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }

  render() {
    return (
      <div>
        <h1>Products Page</h1>
        <ul>
          {this.state.products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductsPage;