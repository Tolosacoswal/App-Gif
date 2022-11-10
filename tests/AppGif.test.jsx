import { render,screen } from "@testing-library/react";
import { AppGif } from "../src/AppGif";

const category = 'one piece'

describe('pruebas en <AppGif/>', () => { 
    test('debe de mostrar el titulo en el componente ', () => { 
        render (<AppGif key = {category} category = {category}/>);
    expect(()=> screen.getByText(key)).toBeTruthy();
    expect(()=> screen.getByText(category)).toBeTruthy();   


     });
 });
 