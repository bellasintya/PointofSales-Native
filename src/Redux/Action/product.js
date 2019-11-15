import axios from 'axios';

export const getProduct = () => {
    return {
        type: 'GET_PRODUCT',
        payload: axios.get ('http://192.168.6.121:8080/product') 
    }
}
export const postProduct = (form) => {
    return {
        type: 'POST_PRODUCT',
        payload: axios.post ('http://192.168.6.121:8080/product',form)
    }
}
export const patchProduct = (form) => {
    return {
        type: 'PATCH_PRODUCT',
        payload: axios.patch (`http://192.168.6.121:8080/product/${form.id_product}`, form)
    }
}
export const deleteProduct = (id) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: axios.delete (`http://192.168.6.121:8080/product/${id}`)
    }
} 