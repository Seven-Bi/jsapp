import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Grids from './Grids';
import Paper from '@material-ui/core/Paper';



describe('React components test', () => {
    let container = null;

    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
    });
    
    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    test(">> renders with or without a different props", () => {
        // load component with prop value
        act(() => {
            render(<Grids status="loading"/>, container);
        });
        expect(container.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim()).toBe("It's loading ...");
    
        //without value passed
        act(() => {
            render(<Grids />, container);
        });
        const image = container.querySelector('div');
        expect(image.getAttribute('name')).toBe('pixel_image');
    
        //with wrong value
        act(() => {
            render(<Grids status="hi" />, container);
        });
        const a_image = container.querySelector('div');
        expect(a_image.getAttribute('name')).toBe('pixel_image');
    });

    test(">> test if can render exact numbers of pixel, and correct colors for each of them", () => {
        // col numbers
        act(() => {
            render(<Grids row_num={10} col_num={3} />, container);
        });
        const col = container.querySelector('div').querySelector('div');
        expect(col.getElementsByTagName('div').length).toEqual(3);

        // row numbers
        act(() => {
            render(<Grids row_num={10} col_num={3} />, container);
        });
        const row = container.querySelector('div');
        expect(row.children.length).toEqual(10);
        
        // correct rgb value with 3 * 3 data
		// let fake_data = 
		// [
		//   [ 1, 1, 1 ], [ 1, 1, 2 ], [ 1, 1, 3 ],
		//   [ 1, 2, 1 ], [ 1, 2, 2 ], [ 1, 2, 3 ],
		//   [ 1, 3, 1 ], [ 1, 3, 2 ], [ 1, 3, 3 ],
		//   [ 2, 1, 1 ], [ 2, 1, 2 ], [ 2, 1, 3 ],
		//   [ 2, 2, 1 ], [ 2, 2, 2 ], [ 2, 2, 3 ],
		//   [ 2, 3, 1 ], [ 2, 3, 2 ], [ 2, 3, 3 ],
		//   [ 3, 1, 1 ], [ 3, 1, 2 ], [ 3, 1, 3 ],
		//   [ 3, 2, 1 ], [ 3, 2, 2 ], [ 3, 2, 3 ],
		//   [ 3, 3, 1 ], [ 3, 3, 2 ], [ 3, 3, 3 ]
        // ]       
        // // we are going to pick rgb [3,1,2] to represents rgb
        // // so it location in pixel col and row will 2, 7 
        // act(() => {
        //     render(<Grids row_num={9} col_num={3} />, container);
        // });
        // const rgb_col = container.querySelector('div').querySelector('div').getElementsByTagName('div')[2];      
        // const rgb_row = container.querySelector('div').children[7];
        // expect(rgb_col).toEqual(2); 
        // expect({rgb_col}-{rgb_row}).toEqual(7);  
    }); 
});
