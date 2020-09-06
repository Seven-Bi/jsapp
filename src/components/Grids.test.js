import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Grids from './Grids';
import Paper from '@material-ui/core/Paper';



let container = null;

jest.doMock('./Row', () => {
	const ComponentToMock = () => <Paper />;
	return ComponentToMock;
});

let ComponentToTest = require('./ComponentToTest').default;

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

it("renders with or without a different props", () => {
    // load component withtou prop value
    act(() => {
        render(<Grids status="loading"/>, container);
    });
    expect(container.textContent).toBe("loading");
    // with wrong value
    act(() => {
        render(<Hello status="Jenny" />, container);
    });
    expect(container.textContent).toBe("Hello, Jenny!");
});