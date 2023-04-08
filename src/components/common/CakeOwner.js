import { useCakeContext } from "../../contexts/CakeContext"

import { Navigate, Outlet, useParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";


export const CakeOwner = ({
    children,
}) => {

    const { cakeId } = useParams();

    const { cakeGet } = useCakeContext();
    const { userId} = useAuthContext();


    const cakeCurrent = cakeGet(cakeId);

    if(cakeCurrent && cakeCurrent._ownerId !== userId ){
        return <Navigate to={`/catalog/${cakeId}`}/>
    }

    return children ? children : <Outlet/>
}