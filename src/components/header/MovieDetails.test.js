
import MovieDetails from "./MovieDetails.js";
import { render, screen, cleanup } from "@testing-library/react";


describe ("MovieDetails", () => {

    afterEach(() => {
        cleanup(); 
    })
    
    test('MovieDetails is rendered', () => {

        const movie = {
            "id": "testId",
            "imageUrl": "testImageUrl",
            "title": "testTitle",
            "releaseYear": "testReleaseYear",
            "genres": "testGenres",
            "rating": "testRating",
            "duration": "testDuration",
            "description": "testDescription"
        }
        renderComponent(movie);
        const movieTile = screen.getByTestId("movieDetails");
        expect(movieTile).toBeInTheDocument();
        const testTitle = screen.getByText("testTitle");
        expect(testTitle).toBeInTheDocument();
        const testReleaseYear = screen.getByText("testReleaseYear");
        expect(testReleaseYear).toBeInTheDocument();
        const testGenres = screen.getByText("testGenres");
        expect(testGenres).toBeInTheDocument();
        const testRating = screen.getByText("testRating");
        expect(testRating).toBeInTheDocument();
        const testDuration = screen.getByText("testDuration");
        expect(testDuration).toBeInTheDocument();
        const testDescription = screen.getByText("testDescription");
        expect(testDescription).toBeInTheDocument();

    })
     
});

function renderComponent(movie) {
    render(<MovieDetails movie={movie} />);
}