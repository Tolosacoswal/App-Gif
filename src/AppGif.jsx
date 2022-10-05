

import { useState } from "react";
import {  AddCategory } from "./componet/AddCategory";
import { GifGrid } from "./componet/GifGrid";
export const AppGif = () => {

const [categories, setCategories] = useState(["one punch"]);

const onAddCategory =(newCategory)=>
{
if (categories.includes(newCategory)) return
setCategories([newCategory,...categories,]);
}
 

return (
    <>
    <h1>AppGif</h1>
    <AddCategory 
    onNewCategory = { onAddCategory}
    
    />
    {
      categories.map((category)=>(
      <GifGrid 
      key={category} 
      category={category}/>)
      )
    }
    </>
  )
}
