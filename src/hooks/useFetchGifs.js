
import { useEffect,useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] =useState([]);
    const [isCarga,setIsCarga]=useState(true);
  
    const getImages = async ()=>{
    const newImages =await getGifs(category );
    setImages(newImages);
    setIsCarga(false);
  }
   
    useEffect(() => {
    getImages();
      
    }, [])
    
  return {
     images,
     isCarga
    
  }


    
    
  
}
