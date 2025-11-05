import axios from 'axios';

export default class ProductService{
    constructor(){
        let service = axios.create({
            baseURL: 'http://localhost:5005/products',
            withCredentials: true
        });
        this.service = service;
    }

    getProducts(){
        return this.service.get('/').then((resp)=>{
            console.log(resp.data);
            return resp.data;
        })
    }

    createProduct(productAdded){
        return this.service.post('/', productAdded).then((resp)=>{
            console.log(resp.data);
            return resp.data;
        })
    }

    editProductImage(imageFile, productId){
        return this.service.patch(`/${productId}`, imageFile).then((resp)=>{
            console.log(resp.data);
            return resp.data;
        })
    }

    getProduct(productId){
        return this.service.get(`/${productId}`).then((resp)=>{
            console.log(resp.data);
            return resp.data;
        })
    }

}