
import { useAuthContext } from "../../contexts/AuthContext"
import { Navigate , Outlet} from "react-router-dom";


export default function RouteGuard({
    children
}){

    const {isAuthenticated} = useAuthContext();


if (!isAuthenticated){
    return <Navigate to='/login'/>
}
 
return children ? children : <Outlet/>

}