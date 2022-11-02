import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('pruebas en <GifItem />', () => { 
    const title = `luffy`;
    const url ="https://one-piece.com/luffy.jpg"
test('debe hacer match con el snapshot', () => {

const {container}=render(<GifItem title={title} url={url}/>);
expect (container).toMatchSnapshot();
})
 })