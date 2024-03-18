
import MovieTile from "./MovieTile.js";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";


describe ("MovieTile", () => {

    afterEach(() => {
        cleanup(); 
    })
    
    test('MovieTile is rendered', () => {

        const movie = {
            "id": "testId",
            "imageUrl": "testImageUrl",
            "title": "testTitle",
            "releaseYear": "testReleaseYear",
            "genres": ["testGenres"],
            "rating": "testRating",
            "duration": "testDuration",
            "description": "testDescription"
        }
        renderComponent(movie, () => {});
        const movieTile = screen.getByTestId("movieTile");
        expect(movieTile).toBeInTheDocument();
        const testTitle = screen.getByText("testTitle");
        expect(testTitle).toBeInTheDocument();
        const testReleaseYear = screen.getByText("testReleaseYear");
        expect(testReleaseYear).toBeInTheDocument();
        const testGenres = screen.getByText("testGenres");
        expect(testGenres).toBeInTheDocument();

    })
     
    test('Movie selection', async () => {
        
        const movie = {
            "id": "testId",
            "imageUrl": "testImageUrl",
            "title": "testTitle",
            "releaseYear": "testReleaseYear",
            "genres": ["testGenres"],
            "rating": "testRating",
            "duration": "testDuration",
            "description": "testDescription"
        }
        const mockedSelectionHandler = jest.fn();
        renderComponent(movie, mockedSelectionHandler);

        const movieTile = screen.getByTestId("movieTile");
        fireEvent.click(movieTile);
        expect(mockedSelectionHandler).toHaveBeenCalledTimes(1);
        expect(mockedSelectionHandler).toHaveBeenCalledWith('testId');

    })
});

function renderComponent(movie, selectionHandler) {
    render(<MovieTile movie={movie} handler={selectionHandler} key={1} />);
}