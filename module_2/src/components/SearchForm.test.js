import SearchForm from "./SearchForm.js";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const onSelect = jest.fn();

afterEach(() => {
    cleanup(); 
})

beforeEach(() => {

})

describe ("SearchForm", () => {

    test('SearchForm is rendered', () => {
        render(<SearchForm 
            initialQuery = "horror"
            onSearch = {(query) => {console.log("search initiated with query: " + query)}}
            />);
        const searchForm = screen.getByTestId("searchForm");
        expect(searchForm).toBeInTheDocument();
    })

    test('Snapshot', () => {
        const {asFragment} = render(<SearchForm 
            initialQuery = "horror"
            onSearch = {(query) => {console.log("search initiated with query: " + query)}}
            />);
        expect(asFragment()).toMatchSnapshot();
    })

    test('SearchForm is rendered', () => {
        render(<SearchForm 
            initialQuery = "horror or anything"
            onSearch = {(query) => {console.log("search initiated with query: " + query)}}
            />);
        
        const input = screen.getByDisplayValue('horror or anything')
        expect(input).toBeInTheDocument();
        const searchButton = screen.getByText('Search')
        expect(searchButton).toBeInTheDocument();
    })

    test('SearchForm typing and submit', () => {
        const onSearch = jest.fn();
        render(<SearchForm 
            initialQuery="initial"
            onSearch={onSearch}
            />);
        
        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'whatever' } });
        expect(input).toHaveDisplayValue("whatever");
        const form = screen.getByTestId("form")
        fireEvent.submit(form);
        expect(onSearch).toHaveBeenCalledTimes(1);
        expect(onSearch).toHaveBeenCalledWith("whatever");
    })

    test('SearchForm button clicked', () => {
        const onSearch = jest.fn();
        render(<SearchForm 
            initialQuery="horror"
            onSearch={onSearch}
            />);
        
        const input = screen.getByDisplayValue('horror')
        expect(input).toBeInTheDocument();
        const searchButton = screen.getByRole('button', 'Search')
        expect(searchButton).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'whatever and something' } });
        expect(input.value).toBe("whatever and something");
        fireEvent.click(searchButton);
        expect(onSearch).toHaveBeenCalledTimes(1);
        expect(onSearch).toHaveBeenCalledWith("whatever and something");
    })
});