import React, { useState } from "react";
import { createContext, ReactNode, useContext } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

// we need four functions
type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

// use createContext to specify the type is ShoppingCartContext type
const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  // store cart items here; specify the CartItem type in the beginning to store id and quantity properties
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // FOUR functions below

  function getItemQuantity(id: number) {
    // if the item id equals input id, returns quantity or 0
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        //if we don't have that item in the cart/current items list, add it to the cart
        return [...currItems, { id, quantity: 1 }]; //return all current items and give it a 1 for the id
      } else {
        //if the item does exist, if the id matches, increase the quantity, otherwise just return the item
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      // check if the quantity in the cart/current items is 1 or if the id doesn't exist, return a list of current items and filter and remove that id
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id); //return a list that filters out the id that's 1 or doesn't exist and only prints the remaining that don't match that id
      } else {
        //if the item does exist, if the id matches, decrease the quantity, otherwise just return the item
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      // displays a list of items that don't match the id given(because this one needs to be filtered out from the list)
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}