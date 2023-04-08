import { useCakeContext } from "../../contexts/CakeContext"

import { Navigate, Outlet, useParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { Children } from "react";

export const CakeOwner = ({
    chidren,
}) => {

    const { cakeId } = useParams();

    const { cakeGet } = useCakeContext();
    const { userId} = useAuthContext();


    const cakeCurrent = cakeGet(cakeId);

    if(cakeCurrent && cakeCurrent._ownerId !== userId ){
        return <Navigate to={`/catalog/${cakeId}`}/>
    }

    return Children ? Children : <Outlet/>
}