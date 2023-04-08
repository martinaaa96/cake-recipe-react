import { requestFactory } from "./requester"

const baseUrl = 'http://localhost:3030/data/cakes'


export const cakeServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const cakes = Object.values(result);
    
        return cakes;
    };
    
    const getOne = async (cakeId) => {
        const result = await request.get(`${baseUrl}/${cakeId}`);
    
        return result;
    };
    
    const create = async (cakeData) => {
        const result = await request.post(baseUrl, cakeData);
    
        console.log(result);
    
        return result;
    };
    
    const edit = (cakeId, data) => request.put(`${baseUrl}/${cakeId}`, data);

    const remove = (cakeId) => request.delete(`${baseUrl}/${cakeId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        remove,
    };
}