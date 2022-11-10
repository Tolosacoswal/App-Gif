import { renderHook , waitFor} from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('pruebas en el hook useFetchGif', () => { 

    test('debe regresar el estado inicial', () => { 
       const{result}= renderHook (() => {return useFetchGifs('one piece')})
        const {images,isCarga}=result.current;
        expect(images.length).toBe(0);
        expect(isCarga).toBeTruthy();

        
     });
     test('debe retornar un arreglo de imagenes y isCarga en false', async () => {
        const{result}= renderHook (() => useFetchGifs('one piece'));
        await waitFor(
            ()=> expect(result.current.images.length).toBeGreaterThan(0),
        );
        
        const {images,isCarga}=result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isCarga).toBeFalsy();
     });
 });