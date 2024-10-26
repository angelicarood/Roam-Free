import React, { useState, useContext } from 'react';
import { ThemeContext } from '../ThemeContext'; // Adjust the path as necessary
import styled from 'styled-components';

// Products Data
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
  <ProductCard>
    <ProductImage src={product.image} alt={product.name} />
    <ProductDetails>
      <ProductTitle>{product.name}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>{product.price}</ProductPrice>
      <AddToCartButton onClick={() => addToCart(product)}>Add to Cart</AddToCartButton>
    </ProductDetails>
  </ProductCard>
);

// Component for displaying the shopping cart
const ShoppingCart = ({ cart }) => (
  <CartContainer>
    <h2>Shopping Cart</h2>
    {cart.map((item, index) => (
      <CartItem key={index}>
        <p>{item.name} - {item.price}</p>
      </CartItem>
    ))}
  </CartContainer>
);

// ShopPage Component
const ShopPage = () => {
  const [cart, setCart] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <ShopContainer darkMode={darkMode}>
      <ProductsContainer>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ProductsContainer>
      <ShoppingCart cart={cart} />
    </ShopContainer>
  );
};

// Main App Component
const App = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="App" darkMode={darkMode}>
      <ShopPage />
    </div>
  );
};
// Styled Components
const ShopContainer = styled.div`
  padding: 20px;
`;

const ProductsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  overflow-x: scroll;
  padding: 16px;
  gap: 16px;
  height: 100vh;
`;

const ProductCard = styled.div`
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 290px;
  height: 400px;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const ProductDetails = styled.div`
  text-align: center;
`;

const ProductTitle = styled.h2`
  font-size: 1.5rem;
  margin: 16px 0 8px;
  font-family: 'Syncopate', sans-serif;
`;

const ProductDescription = styled.p`
  margin: 8px 0;
  font-family: 'Syncopate', sans-serif;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: ${({ darkMode }) => (darkMode ? 'white ' : 'black')};
  font-weight: bold;
  font-family: 'Syncopate', sans-serif;
`;

const AddToCartButton = styled.button`
  padding: 8px 16px;
  background-color: #4caf50;
  color: ${({ darkMode }) => (darkMode ? 'white ' : 'black')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Syncopate', sans-serif;
  height: 100%;
`;

const CartContainer = styled.div`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Syncopate', sans-serif;
`;

const CartItem = styled.div`
  margin-bottom: 8px;
`;


export default App;
