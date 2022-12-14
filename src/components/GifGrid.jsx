
import { PropTypes } from "prop-types";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  const {images, isCarga }= useFetchGifs (category); 
  

  return (
    <>
    <h3>{category}</h3>
    {
      isCarga && 
        (<h2>one piece</h2 >) 
    }
    
    <div className="card-grid">
      {
        images.map (( image)=>(
          <GifItem 
            key={image.id}
            {...image}            
            />
            ))
      
    }

</div>
    
    
    </>
  )
  
    
}

GifGrid.propTypes ={
  category: PropTypes.string.isRequired,
}


