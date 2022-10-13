

import { useState } from "react";
import {  AddCategory,GifGrid } from "./componet";

export const AppGif = () => {

const [categories, setCategories] = useState(["One Piece"]);

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
