import { createContext, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { authServiceFactory } from '../services/authService';


export const AuthContext = createContext();


export const AuthProvider = ({
    children,
})=>{
    const navigate = useNavigate(); 

    const [auth, setAuth] = useLocalStorage('auth',{});
    const authService = authServiceFactory(auth.accessToken);

    const onRegisterSubmit = async (values) => {
        const { repeatPassword, ...dataRegister } = values;
        if (repeatPassword !== dataRegister.password) {
    
          return;
        }
        try {
    
          const result = await authService.register(dataRegister);
          setAuth(result);

          navigate('/login');
    
    
        } catch (error) {
          console.log(error.message);
    
        }
      }
  

  const onLoginSubmit = async (data) => {

    try {
      const result = await authService.login(data);
      setAuth(result)

      navigate('/');

    } catch (error) {

      console.log(error.message)
    }


  }


      
    const onLogout = async () => {

        await authService.logout();
        setAuth({});
    
    
      }

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    
      };

    return (
        <>
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
        </>
    )
}

export const useAuthContext = ()=>{
    const context = useContext(AuthContext);

    return context
}