import { createContext ,useState, useEffect, useContext } from "react"

import { cakeServiceFactory } from '../services/cakeService'
import { useNavigate } from "react-router-dom";


export const CakeContext = createContext();

export const CakeProvider = ({
    children
})=>{
    const navigate = useNavigate();
    const [cakes, setCake] = useState([]);
    const cakeService = cakeServiceFactory();
   
  
  useEffect(() => {
    cakeService.getAll()
      .then(result => {
        setCake(result)
      })
  }, []);
  const onCakeCreateSubmit = async (data) => {

        if (data.name === '' || data.description === ''|| data.time === '' || data.image === ''){
          return alert('All fields - requied');
          
        }
    
        const newCake = await cakeService.create(data);
    
        setCake(state => [...state, newCake])
    
        navigate('/catalog')
      }
    
      
    
      const onCakeEditSubmit = async (values)=>{
        const result = await cakeService.edit(values._id, values);
    
    
        setCake(state => state.map(x => x._id === values._id ? result : x))
    
        navigate(`/catalog/${values._id}`);
      }

      const deleteCake = (cakeId) =>{
      setCake(state => state.filter(cake=> cake._id !== cakeId ))
      }

      
const cakeGet = (cakeId)=>{

  return cakes.find(cake => cake._id === cakeId)
} 

const contextValues = {
  cakes,
  onCakeCreateSubmit,
  onCakeEditSubmit,
  cakeGet,
  deleteCake,

}

    return  (

        <CakeContext.Provider value={contextValues} >
{children}
        </CakeContext.Provider>
    )
}

export const useCakeContext = ()=>{

    const context = useContext(CakeContext);

    return context
}