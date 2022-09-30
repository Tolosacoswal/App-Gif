
import { useState } from "react";
export const AppGif = () => {

const [categories, setCategories] = useState(["one punch","dragon ball","atack of titans"]);
const onAddCategory =()=>{
  setCategories([...categories,"valorant"]);
}
 

return (
    <>
    <h1>AppGif</h1>
    <button onClick={onAddCategory}>agregar</button>
    <ol>
      {categories.map( category => {return <li key={category}>{category}</li>})};
    </ol>
    



    </>
    )
}
