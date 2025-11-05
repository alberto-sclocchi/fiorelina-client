import { createContext, useState } from "react";
import ProductService from "../service/ProductService";
import { useNavigate } from "react-router-dom";



const ProductContext = createContext();
const service = new ProductService();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState();
    const [ product, setProduct ] = useState();
    const [ errorMessage, setErrorMessage ] = useState();
    const navigateTo = useNavigate();


    const getAllProducts = async () => {
        const response =  await service.getProducts();

        try{
            setProducts(response.data);
        }catch {
            console.log("Failed to fetch products", response.message);
        }
    }

    const createNewProduct = async (productAdded, imageFile) => {
        const response = await service.createProduct(productAdded);

        if (response.success === "true"){
            const responseFile = await service.editProductImage(imageFile, response.data._id);
            setProduct(responseFile.data);
            navigateTo(`/products/${response.data._id}`);
        } else{
            setErrorMessage(response.message);
        }

        setTimeout(() => {
            setErrorMessage(null);
        }, 3000);
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
        <ProductContext.Provider value={{products, product, getAllProducts, createNewProduct, getProduct, errorMessage}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;