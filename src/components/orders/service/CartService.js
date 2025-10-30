import axios from 'axios';

export default class CartService{
    constructor(){
        let service = axios.create({
            baseURL: 'http://localhost:5005/orders',
            withCredentials: true
        });
        this.service = service;
    }

    sendOrder(orderData){
        return this.service.post('/', orderData).then((resp)=>{
            console.log(resp.data);
            return resp.data;
        })
    }   

    createStripeSession(orderData) {
        return this.service.post('/create-checkout-session', orderData, {headers: {'Content-Type': 'application/json'}}).then((resp) => {
            console.log(resp.data)
            return resp.data; // should contain session URL
        });
    }

}