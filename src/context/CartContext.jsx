import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('birTeaCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('birTeaCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, variant) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id && item.weight === variant.weight);
      if (existingItem) {
        return prev.map(item => 
          (item.id === product.id && item.weight === variant.weight) 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { 
        id: product.id, 
        name: product.name, 
        image: product.image,
        price: variant.price, 
        weight: variant.weight, 
        quantity: 1 
      }];
    });
  };

  const removeFromCart = (id, weight) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.weight === weight)));
  };

  const updateQuantity = (id, weight, delta) => {
    setCartItems(prev => prev.map(item => 
      (item.id === id && item.weight === weight) 
        ? { ...item, quantity: Math.max(1, item.quantity + delta) } 
        : item
    ));
  };

  const clearCart = () => setCartItems([]);

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      cartTotal, 
      cartCount 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
