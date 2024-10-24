import React, { useState } from 'react';

const styles = {
  productCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    width: '280px',
    margin: '16px 8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
  productDetails: {
    textAlign: 'center',
  },
  productTitle: {
    fontSize: '1.5rem',
    margin: '16px 0 8px',
  },
  productText: {
    margin: '8px 0',
  },
  productPrice: {
    fontSize: '1.2rem',
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  productsContainer: {
    display: 'flex',
    overflowX: 'scroll',
  },
  cartContainer: {
    padding: '16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  cartItem: {
    marginBottom: '8px',
  },
  addToCartButton: {
    padding: '8px 16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

const products = [
  { id: 1, name: 'Phone Case', description: 'Nightfall Stylish phone case.', price: '$19.99', image: '/merch1phonecase.webp' },
  { id: 2, name: 'Backpack', description: 'Comfortable and spacious backpack.', price: '$79.99', image: '/merch2backpack.webp' },
  { id: 3, name: 'T-Shirt', description: 'Soft and stylish t-shirt.', price: '$29.99', image: '/merch3tshirt.webp' },
  { id: 4, name: 'Sweater', description: 'Warm and cozy sweater.', price: '$49.99', image: '/merch4sweather.webp' },
  { id: 5, name: 'Hoodie', description: 'Comfortable and trendy hoodie.', price: '$59.99', image: '/merch5hoddie.webp' },
  { id: 6, name: 'Hat', description: 'Cool and casual hat.', price: '$24.99', image: '/merch6hat.webp' },
  { id: 7, name: 'Phone Case', description: 'Daylight stylish phone case.', price: '$19.99', image: '/merch7phonecase.webp' },
];

// Component for displaying a single product
const Product = ({ product, addToCart }) => (
  <div style={styles.productCard}>
    <img src={product.image} alt={product.name} style={styles.productImage} />
    <div style={styles.productDetails}>
      <h2 style={styles.productTitle}>{product.name}</h2>
      <p style={styles.productText}>{product.description}</p>
      <p style={styles.productPrice}>{product.price}</p>
      <button style={styles.addToCartButton} onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  </div>
);

// Component for displaying the shopping cart
const ShoppingCart = ({ cart }) => (
  <div style={styles.cartContainer}>
    <h2>Shopping Cart</h2>
    {cart.map((item, index) => (
      <div key={index} style={styles.cartItem}>
        <p>{item.name} - {item.price}</p>
      </div>
    ))}
  </div>
);

//displaying all products and the shopping cart
const ShopPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="shop-page">
      <main className="shop-main">
        <section className="products" style={styles.productsContainer}>
          {products.map(product => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </section>
        <ShoppingCart cart={cart} />
      </main>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <ShopPage />
    </div>
  );
}
