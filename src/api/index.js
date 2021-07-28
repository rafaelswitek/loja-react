import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://5d6da1df777f670014036125.mockapi.io/api/v1/product'
})

export const get = async(setProduct, handleToggle) => {
    const response = await api.get();
    setProduct(response.data);
    handleToggle();
}