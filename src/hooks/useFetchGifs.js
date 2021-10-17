import { useState ,useEffect} from "react"
import { getGifs } from "../helpers/getGifs";
export const useFetchGifs=(category)=>{
    const [state, setstate] = useState({
        data:[],
        loading:true
    });
     /*Le estoy diciendo que solamente ejecute esta funcion cuando el componenete se este 
    ejecutando por primera vez */
    useEffect(()=>{
        getGifs(category)
            .then(imgs=>{
                setstate({
                    data:imgs,
                    loading:false
                });
            })
    },[category]);
    return state
}