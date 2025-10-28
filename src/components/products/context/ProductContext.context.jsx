import { createContext, useState } from "react";
import ProductService from "../service/ProductService";



const ProductContext = createContext();
const service = new ProductService();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState();

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

    return (
        <ProductContext.Provider value={{products, getAllProducts, createNewProduct}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;