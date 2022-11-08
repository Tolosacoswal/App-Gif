import { useState } from "react"
import { propTypes } from "prop-types";

export const AddCategory=({onNewCategory})=>{
     const [inputValue, setInputValue] = useState(``);
    const onInpuntChange = ({target})=> {
    setInputValue (target.value);
    }
    const onSubmit = (event)=> {
        
            event.preventDefault();
           if (inputValue.trim().length <=1)return;
            // setCategories (categories=>[inputValue,...categories]);
           setInputValue(""); 
           onNewCategory( inputValue.trim());
            
        }
    return (
        <form onSubmit={onSubmit} aria-label="form" >
            <input
        type="text"
        placeholder="Buscar GIF"
        value= {inputValue}
        onChange={ onInpuntChange }
        />
        </form>
        
    )
    AddCategory.propType ={
        onNewCategory: propTypes.func.isRequired,
        }
    }
