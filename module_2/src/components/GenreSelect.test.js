import GenreSelect from "./GenreSelect.js";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

const onSelect = jest.fn();

afterEach(() => {
    cleanup(); 
})

beforeEach(() => {

    
    render(<GenreSelect  
        genreList={["horror","comedy","fantasy","docu","adventure"]}
        selected="fantasy"
        onSelect={onSelect}
        />);
})

describe ("GenreSelect", () => {

    test('GenreSelect is rendered', () => {
        const genreSelect = screen.getByTestId("genreSelect");
        expect(genreSelect).toBeInTheDocument();
    })

    test('All genres are rendered', () => {
        const horror = screen.getByText("horror");
        expect(horror).toBeInTheDocument();
        const comedy = screen.getByText("comedy");
        expect(comedy).toBeInTheDocument();
        const fantasy = screen.getByText("fantasy");
        expect(fantasy).toBeInTheDocument();
        const docu = screen.getByText("docu");
        expect(docu).toBeInTheDocument();
        const adventure = screen.getByText("adventure");
        expect(adventure).toBeInTheDocument();
    })

    test('Highlighting works', () => {
        const fantasy = screen.getByText("fantasy");
        expect(fantasy.classList.contains('selected')).toBe(true);
        const comedy = screen.getByText("comedy");
        fireEvent.click(comedy);
        expect(fantasy.classList.contains('selected')).toBe(false);
        expect(comedy.classList.contains('selected')).toBe(true);
        const adventure = screen.getByText("adventure");
        fireEvent.click(adventure);
        expect(fantasy.classList.contains('selected')).toBe(false);
        expect(comedy.classList.contains('selected')).toBe(false);
        expect(adventure.classList.contains('selected')).toBe(true);
    })

    test('OnSelect event is fired', () => {
        const adventure = screen.getByText("adventure");
        fireEvent.click(adventure);
        expect(onSelect).toHaveBeenCalledTimes(1);
        const comedy = screen.getByText("comedy");
        fireEvent.click(comedy);
        expect(onSelect).toHaveBeenCalledTimes(2);
        const fantasy = screen.getByText("fantasy");
        fireEvent.click(fantasy);
        expect(onSelect).toHaveBeenCalledTimes(3);
        const horror = screen.getByText("horror");
        fireEvent.click(horror);
        expect(onSelect).toHaveBeenCalledTimes(4);
        const docu = screen.getByText("docu");
        fireEvent.click(docu);
        expect(onSelect).toHaveBeenCalledTimes(5);
    })

});