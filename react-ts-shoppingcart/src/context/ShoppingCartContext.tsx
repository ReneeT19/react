import React, { useState } from 'react'
import { createContext, ReactNode, useContext } from "react"

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

// we need four functions
type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

// use createContext to specify the type is ShoppingCartContext type
const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider( { children }: ShoppingCartProviderProps) {
    // store cart items here; specify the CartItem type in the beginning to store id and quantity properties
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    // create the function for getItemQuantity and pass it into value below
    function getItemQuantity(id: number) {
        // if the item id equals input id, returns quantity or 0
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    return (
    <ShoppingCartContext.Provider value={{getItemQuantity}}>
        {children}
    </ShoppingCartContext.Provider>
    )
}