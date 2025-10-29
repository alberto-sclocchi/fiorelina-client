import { createContext, useState } from "react";
import ProductService from "../service/ProductService";
import { useParams } from "react-router-dom";



const ProductContext = createContext();
const service = new ProductService();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState();
    const [ product, setProduct ] = useState();

    const getAllProducts = async () => {
        const response =  await service.getProducts();

        try{
            setProducts(response.data);
        }catch {
            console.log("Failed to fetch products", response.message);
        }
    }

    const createNewProduct = async (productAdded) => {
        const response = await service.createProduct(productAdded);
    }

    const getProduct = async (productId) => {
        const response = await service.getProduct(productId);
        
        try{
            setProduct(response.data);
        }catch {
            console.log("Failed to fetch products", response.message);
        }

    }

    return (
        <ProductContext.Provider value={{products, product, getAllProducts, createNewProduct, getProduct}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;