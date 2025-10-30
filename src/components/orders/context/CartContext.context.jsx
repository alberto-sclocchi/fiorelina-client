import { createContext, use, useState } from "react";
import CartService from "../service/CartService";
import { useNavigate } from "react-router-dom";



const CartContext = createContext();
const service = new CartService();

export const CartProvider = ({ children }) => {

    const navigateTo = useNavigate();

    const sendOrder = async (orderData) => {
        const response = await service.sendOrder(orderData);

        try{
            console.log("Order sent successfully", response.data);
            localStorage.removeItem('cart');
            navigateTo("/");
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