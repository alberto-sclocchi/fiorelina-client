import { createContext, use, useState } from "react";
import CartService from "../service/CartService";



const CartContext = createContext();
const service = new CartService();

export const CartProvider = ({ children }) => {
    
    const sendOrder = async (orderData) => {
        const response = await service.sendOrder(orderData);

        try{
            console.log("Order sent successfully", response.data);
            localStorage.removeItem('cart');
            localStorage.removeItem('costumer');
        }catch {
            console.log("Failed to send order", response.message);
        }
    }

    const createStripeSession = async (orderData) => {
        const session = await service.createStripeSession(orderData);
        return session.url
    }

    return (
        <CartContext.Provider value={{sendOrder, createStripeSession}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;