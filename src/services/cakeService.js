import  * as request  from "./requester"

const baseUrl = 'http://localhost:3030/jsonstore/cakes'

export const getAll = async ()=>{
   const result = await request.get(baseUrl)

   const cakes = Object.values(result)

    return cakes;
}