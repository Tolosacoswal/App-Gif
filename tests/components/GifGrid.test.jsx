
// pruebas del componente GifGrid

import { render,screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
jest.mock('../../src/hooks/useFetchGifs')
// este jest no solo sirve para mis librerias, tambien para librerias de terceros con esto le estamos pidiendo que haga un mook de "../../src/hooks/useFetchGifs"

// la primer prueba que se realizara es que se debe mostrar el loading 
describe('pruebas en <GifGrid/>', () => { 
//    preparamos una constante que se llamara category esta es la misma category que tenemos en nuestro GifGrid.jsx
// const Category = 'one piece';
const category = 'one piece'
    test('debe de mostrar el loading inicialmente ', () => { 
        // denemos aqui añadir el useFetchGifs para poder realizar nuestras pruebas
        
        useFetchGifs.mockReturnValue({
            images: [],
            isCarga: true 
        });
        // a continuacion preparamos nuestro sujeto de pruebas que es GifGrid
        // render(<GifGrid Category = {Category}/>);
        render(<GifGrid category={category} />);

        // si no estamos trabajando con typeScript usamos las propTypes en el GifGrid.jsx
        screen.debug();
        expect(() => screen.getByText('cargando...'));
        // expect(screen.getByText('cargando...'));
        expect(() => screen.getByText(category));
        // modificamos el expect para que la prueba corra 
        // expect(screen.getByText(category));

        
        
    });
    test('debe de mostrar items cuando se carga las imagenes  useFethcGifs', () => { 
    // render(<GifGrid category={category} />);
    // lo primero que debemos hacer es importar el useFetchGifs para asi poder empezar a hacer nuestras pruebas en mooks
    // recordemos que importamos la funcion por debajo de las importaciones agregamos el jest.mock
        const gifs = [
            {
                id:'ABC',
                title:'Luffy',
                url:'https://localhost/Luffy.jpg/'

            },
            {
                id:'123',
                title:'goku',
                url:'https://localhost/goku.jpg/'

            }
        ]
    useFetchGifs.mockReturnValue({
        images: gifs,
        isCarga: false
    });
    
    render(<GifGrid category={category} />);
    // screen.debug();
    expect(screen.getAllByRole('img').length).toBe(2);
});
})