
import MovieTile from "./MovieTile.js";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";


describe ("MovieTile", () => {

    afterEach(() => {
        cleanup(); 
    })
    
    test('MovieTile is rendered', () => {

        const movie = {
            "id": "testId",
            "poster_path": "testImageUrl",
            "title": "testTitle",
            "release_date": "1999-05-23",
            "genres": ["testGenres"],
            "vote_average": "testRating",
            "runtime": "testDuration",
            "overview": "testDescription"
        }
        renderComponent(movie, () => {});
        const movieTile = screen.getByTestId("movieTile");
        expect(movieTile).toBeInTheDocument();
        const testTitle = screen.getByText("testTitle");
        expect(testTitle).toBeInTheDocument();
        const testReleaseYear = screen.getByText("1999");
        expect(testReleaseYear).toBeInTheDocument();
        const testGenres = screen.getByText("testGenres");
        expect(testGenres).toBeInTheDocument();

    })
     
    test('Movie selection', async () => {
        
        const movie = {
            "id": "testId",
            "poster_path": "testImageUrl",
            "title": "testTitle",
            "release_date": "1999-05-23",
            "genres": ["testGenres"],
            "vote_average": "testRating",
            "runtime": "testDuration",
            "overview": "testDescription"
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
    render(<MovieTile movie={movie} setSelectedMovieId={selectionHandler} key={1} />);
}