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
          return alert('All fields are requied');
          
        } else if( data.name.length < 7){
          return alert('Cake name should be at least 7 characters!');
        }else if ( data.description.length < 10){
          return alert('Cake recipe descripton should be at least 10 characters!');
        }else if(data.time.length < 2 ){
          return alert('Cake cooking time  should be at least 2 characters!');
        }
    
        const newCake = await cakeService.create(data);
    
        setCake(state => [...state, newCake])
    
        navigate('/catalog')
      }
    
      
    
      const onCakeEditSubmit = async (values)=>{
      
        if(values.name === "" || values.description === "" || values.time === "" || values.image === ""){
          return alert('All fields are requied');
        }

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