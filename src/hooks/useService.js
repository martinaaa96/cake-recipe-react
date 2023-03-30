
import { useContext } from "react"
import { AuthContext } from "../components/contexts/AuthContext"

export const useService = (serviceFactory) => {

    const { token } = useContext(AuthContext);

    const service = serviceFactory(token);

    return service
}