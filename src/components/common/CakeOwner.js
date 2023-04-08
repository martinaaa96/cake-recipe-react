import { useCakeContext } from "../../contexts/CakeContext"

import { useParams } from "react-router-dom";

export const CakeOwner = () => {

    const { cakeId } = useParams();

    const { cakeGet } = useCakeContext();

    const cakeCurrent = cakeGet(cakeId);

    if(cakeCurrent._ownerId)
}