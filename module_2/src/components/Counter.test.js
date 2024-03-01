import Counter from "./Counter.js";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

afterEach(() => {
    cleanup(); 
})

beforeEach(() => {
    render(<Counter  />);
})

describe ("Counter", () => {

    test('Number is rendered', () => {
        const counter = screen.getByTestId("counter");
        expect(counter).toHaveTextContent("15");
    })

    test('Decrease button works', () => {
        const counter = screen.getByTestId("counter");
        const decreaseButton = screen.getByText("decrease");
        fireEvent.click(decreaseButton);
        expect(counter).toHaveTextContent("14");
        fireEvent.click(decreaseButton);
        expect(counter).toHaveTextContent("13");
    })
    
    test('Increase button works', () => {
        const counter = screen.getByTestId("counter");
        const increaseButton = screen.getByText("increase");
        fireEvent.click(increaseButton);
        expect(counter).toHaveTextContent("16");
        fireEvent.click(increaseButton);
        expect(counter).toHaveTextContent("17");
    })
    
    test('Both buttons work', () => {
        const counter = screen.getByTestId("counter");
        const decreaseButton = screen.getByText("decrease");
        const increaseButton = screen.getByText("increase");
        fireEvent.click(decreaseButton);
        expect(counter).toHaveTextContent("14");
        fireEvent.click(increaseButton);
        expect(counter).toHaveTextContent("15");
        fireEvent.click(increaseButton);
        expect(counter).toHaveTextContent("16");
        fireEvent.click(decreaseButton);
        expect(counter).toHaveTextContent("15");
    })
});