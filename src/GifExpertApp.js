import React,{useState} from 'react'
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';

export const GifExpertApp =() => {
    const [categories, setcategories] = useState(["Dragon ball Z"]);
    //Con {} ponemos una expresion dentro del html 

    return (
        <>
           <h2>GifExpertApp</h2> 
           <AddCategory setcategories={setcategories} categories={categories}/>
           <hr/>
           <ol>
                {
                   categories.map(category =>(
                       <GifGrid 
                            key={category}
                            category={category}
                       />
                   )) 
                }

           </ol>
       </>
    )
}
