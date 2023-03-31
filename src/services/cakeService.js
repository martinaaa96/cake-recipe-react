import { requestFactory } from "./requester"

const baseUrl = 'http://localhost:3030/data/cakes'


export const cakeServiceFactory = (token) => {

    const request = requestFactory(token)

    const getAll = async () => {
        const result = await request.get(baseUrl)

        const cakes = Object.values(result)

        return cakes;
    }
    const getOne = async (cakeId) => {
        const result = await request.get(`${baseUrl}/${cakeId}`)


        return result
    }

    const create = async (dataCake) => {

        const result = await request.post(baseUrl, dataCake)


        return result
    }

    const remove = (cakeId) => { request.delete(`${baseUrl}/${cakeId}`)



    }

    const edit = (cakeId, data) => { request.put(`${baseUrl}/${cakeId}`, data)
}

    return {
        getAll,
        getOne,
        create,
        remove,
    }

}