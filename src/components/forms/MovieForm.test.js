
import MovieForm from "./MovieForm.js";
import { render, screen, cleanup, fireEvent, act } from "@testing-library/react";


describe ("MovieDetails", () => {

    afterEach(() => {
        cleanup(); 
    })
    
    test('MovieForm is rendered', () => {

        const movie = {
            "id": "testId",
            "imageUrl": "testImageUrl",
            "title": "testTitle",
            "releaseYear": "2002",
            "genres": ["Horror"],
            "rating": "testRating",
            "duration": "testDuration",
            "description": "testDescription",
            "url": "testUrl"
        }
        const { container } = renderComponent(movie);
        const movieForm = screen.getByTestId("movieForm");
        expect(movieForm).toBeInTheDocument();
        const titleInput = container.querySelector(`input[name="title"]`);
        expect(titleInput).toBeInTheDocument();
        const releaseYearInput = screen.getByDisplayValue("2002");
        expect(releaseYearInput).toBeInTheDocument();
        const testGenres = screen.getByText("Horror");
        expect(testGenres).toBeInTheDocument();
        const testRating = screen.getByDisplayValue("testRating");
        expect(testRating).toBeInTheDocument();
        const testDuration = screen.getByDisplayValue("testDuration");
        expect(testDuration).toBeInTheDocument();
        const testDescription = screen.getByDisplayValue("testDescription");
        expect(testDescription).toBeInTheDocument();
        const testUrlInput = screen.getByDisplayValue("testUrl");
        expect(testUrlInput).toBeInTheDocument();

    })


    test('Change title', () => {

        const movie = {
            "id": "testId",
            "imageUrl": "testImageUrl",
            "title": "testTitle",
            "releaseYear": "2002",
            "genres": ["Horror"],
            "rating": "testRating",
            "duration": "testDuration",
            "description": "testDescription",
            "url": "testUrl"
        }
        const onSubmit = jest.fn();
        const { container } = renderComponent(movie, onSubmit);
        const titleInput = container.querySelector(`input[name="title"]`);
        expect(titleInput).toBeInTheDocument();
        fireEvent.change(titleInput, { target: { value: 'new title' } });
        const submitButton = screen.getByText('submit')
        fireEvent.click(submitButton);
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith({
            "id": "testId",
            "imageUrl": "testImageUrl",
            "title": "new title",
            "releaseYear": "2002",
            "genres": ["Horror"],
            "rating": "testRating",
            "duration": "testDuration",
            "description": "testDescription",
            "url": "testUrl"
        });
        
    })

    test('Change releaseYear', async () => {

        const movie = {
            "id": "testId",
            "imageUrl": "testImageUrl",
            "title": "testTitle",
            "releaseYear": "2002",
            "genres": ["Horror"],
            "rating": "testRating",
            "duration": "testDuration",
            "description": "testDescription",
            "url": "testUrl"
        }
        const onSubmit = jest.fn();
        renderComponent(movie, onSubmit);
        const releaseYearInput = screen.getByDisplayValue("2002");
        expect(releaseYearInput).toBeInTheDocument();
        await fireEvent.click(releaseYearInput);
        const releaseYearInputOption = screen.getByText("2006");
        await fireEvent.click(releaseYearInputOption);
        const submitButton = screen.getByText('submit')
        fireEvent.click(submitButton);
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith({
            "id": "testId",
            "imageUrl": "testImageUrl",
            "title": "testTitle",
            "releaseYear": "2006",
            "genres": ["Horror"],
            "rating": "testRating",
            "duration": "testDuration",
            "description": "testDescription",
            "url": "testUrl"
        });
        
    })
     
    test('Change rating', () => {

        const movie = {
            "id": "testId",
            "imageUrl": "testImageUrl",
            "title": "testTitle",
            "releaseYear": "2002",
            "genres": ["Horror"],
            "rating": "testRating",
            "duration": "testDuration",
            "description": "testDescription",
            "url": "testUrl"
        }
        const onSubmit = jest.fn();
        const { container } = renderComponent(movie, onSubmit);
        const titleInput = container.querySelector(`input[name="rating"]`);
        expect(titleInput).toBeInTheDocument();
        act(() => {
            fireEvent.change(titleInput, { target: { value: 'new rating' } });
        });
        const submitButton = screen.getByText('submit')
        fireEvent.click(submitButton);
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith({
            "id": "testId",
            "imageUrl": "testImageUrl",
            "title": "testTitle",
            "releaseYear": "2002",
            "genres": ["Horror"],
            "rating": "new rating",
            "duration": "testDuration",
            "description": "testDescription",
            "url": "testUrl"
        });
        
    })

    test('Change genres', async () => {

        const movie = {
            "id": "testId",
            "imageUrl": "testImageUrl",
            "title": "testTitle",
            "releaseYear": "2002",
            "genres": ["Horror"],
            "rating": "testRating",
            "duration": "testDuration",
            "description": "testDescription",
            "url": "testUrl"
        }
        const onSubmit = jest.fn();
        const { container } = renderComponent(movie, onSubmit);
        const genresInput = screen.getByText("Horror");
        expect(genresInput).toBeInTheDocument();
        await fireEvent.click(genresInput);
        const genresInputOption = screen.getByText("Adventure");
        act(() => {
            fireEvent.click(genresInputOption);
        });
        const genresInputOption2 = screen.getByText("Docu");
        act(() => {
            fireEvent.click(genresInputOption2);
        });
        const genresInputOption3 = screen.getByText("Comedy");
        act(() => {
            fireEvent.click(genresInputOption3);
            fireEvent.click(genresInputOption3);
        });
        const submitButton = screen.getByText('submit')
        fireEvent.click(submitButton);
        expect(onSubmit).toHaveBeenCalledWith({
            "id": "testId",
            "imageUrl": "testImageUrl",
            "title": "testTitle",
            "releaseYear": "2002",
            "genres": ["Horror","Adventure","Docu"],
            "rating": "testRating",
            "duration": "testDuration",
            "description": "testDescription",
            "url": "testUrl"
        });
        
    })
});

function renderComponent(movie, onSubmit) {
    return render(<MovieForm movie={movie} onSubmit={onSubmit} />);
}