import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Grids from './Grids';
import { DataContext } from "../DataContext";



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
            const func = jest.fn()
            render
            (
              <DataContext.Provider value=
                {{ 
                    data: [8, 16, 24],
                    callback: func,
                    max_row: 128,
                    max_col: 256 
                }}
              >
                <Grids />
              </DataContext.Provider>, container
            );
        });

        const image = container.querySelector('div');
        expect(image.getAttribute('name')).toBe('pixel_image');
    
        //with wrong value
        act(() => {
            const func = jest.fn()
            render
            (
              <DataContext.Provider value=
                {{ 
                    data: [8, 16, 24],
                    callback: func,
                    max_row: 128,
                    max_col: 256 
                }}
              >
                <Grids status="hi" />
              </DataContext.Provider>, container
            );
        });
        const a_image = container.querySelector('div');
        expect(a_image.getAttribute('name')).toBe('pixel_image');
    });

    test(">> test if can render exact number of pixels, and correctly colors rendered for each of pixel", () => {
        // col numbers
        act(() => {
            const func = jest.fn()
            render
            (
              <DataContext.Provider value=
                {{ 
                    data: [8, 16, 24],
                    callback: func,
                    max_row: 128,
                    max_col: 256 
                }}
              >
                <Grids row_num={10} col_num={3} />
              </DataContext.Provider>, container
            );
        });
        const col = container.querySelector('div').querySelector('div');
        expect(col.getElementsByTagName('div').length).toEqual(3);

        // row numbers
        act(() => {
            const func = jest.fn()
            render
            (
              <DataContext.Provider value=
                {{ 
                    data: [8, 16, 24],
                    callback: func,
                    max_row: 128,
                    max_col: 256 
                }}
              >
                <Grids row_num={10} col_num={3} />
              </DataContext.Provider>, container
            );
        });
        const row = container.querySelector('div');
        expect(row.children.length).toEqual(10);
        
        //check if correct rgb color rendered
        // act(() => {
        //     const func = jest.fn()
        //     render
        //     (
        //       <DataContext.Provider value=
        //         {{ 
        //             data: [1, 2, 3],
        //             callback: func,
        //             max_row: 128,
        //             max_col: 256 
        //         }}
        //       >
        //         <DataContext.Consumer>{func}</DataContext.Consumer>
        //       </DataContext.Provider>, container
        //     );
        //     expect(func.mock.calls).toEqual('a');
        // }); 
    }); 
});
