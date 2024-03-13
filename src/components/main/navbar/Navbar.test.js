import Navbar from "./Navbar.js";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

const onSelect = jest.fn();
const genreList=["horror","comedy","fantasy","docu","adventure"]

describe ("Navbar", () => {

    afterEach(() => {
        cleanup(); 
    })
    
    test('Navbar is rendered', () => {
        renderComponent();
        const genreSelect = screen.getByTestId("genreSelect");
        expect(genreSelect).toBeInTheDocument();
        const sortControl = screen.getByTestId("sortControl");
        expect(sortControl).toBeInTheDocument();
    })

});

function renderComponent() {
    render(<Navbar filterByGenre={() => {}}
        setSortBy={() => {}}/>);
}