import React, { createContext, useContext, useEffect, useState } from "react";
import { BsTable } from "react-icons/bs";

export const ProductContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [itemAmount, setItemAmount] = useState(0);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.quantity;
    }, 0);
    setItemAmount(amount);
  }, [cart]);

  const addToCart = (product, id) => {
    // console.log(product);
    const newItem = { ...product, quantity: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, quantity: cartItem.quantity + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
    // console.log(cart);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item, id);
  };

  const decreaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
      });
      setCart(newCart);
    }
    {
      if (item.quantity < 2) {
        removeFromCart(id);
      }
    }
  };
  const summAmount = () =>
    cart.reduce((first, sec) => {
      return first.quantity + sec.quantity;
    }, 0);
  //   console.log(summAmount());

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.quantity;
    }, 0);
    setTotal(parseInt(total));
  }, [cart]);

  return (
    <ProductContext.Provider
      value={{
        total,
        addToCart,
        cart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default CartProvider;

const useCart = () => useContext(ProductContext);

export { useCart };
