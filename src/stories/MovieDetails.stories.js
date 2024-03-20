import  MovieDetails  from '../components/header/MovieDetails';
import { within, expect } from '@storybook/test';

export default {
  title: 'App/MovieDetails',
  component: MovieDetails,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
  },
};

const testMovie = {
  "id": "3",
  "imageUrl": "https://m.media-amazon.com/images/I/51dcaJOAfrL._AC_UF894,1000_QL80_.jpg",
  "title": "Fahrenheit 9/11",
  "releaseYear": "2004",
  "genres": ["Documentary", "Comedy"],
  "rating": "7.5",
  "duration": "2h 2min",
  "description": "Michael Moore's view on what happened to the United States after September 11 and how the Bush Administration allegedly used the tragic event to push forward its agenda for unjust wars in Afghanistan and Iraq."
}

export const Rendered = {
  args: {
    movie: testMovie
  },
};

export const EveryDataIsCorrect = {
  args: {
    movie: testMovie
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const movieDetails = canvas.getByTestId("movieDetails");
    expect(movieDetails).toBeInTheDocument();
    const testTitle = canvas.getByText("Fahrenheit 9/11");
    expect(testTitle).toBeInTheDocument();
    const testReleaseYear = canvas.getByText("2004");
    expect(testReleaseYear).toBeInTheDocument();
    const testGenres = canvas.getByText("Documentary, Comedy");
    expect(testGenres).toBeInTheDocument();
    const testRating = canvas.getByText("7.5");
    expect(testRating).toBeInTheDocument();
    const testDuration = canvas.getByText("2h 2min");
    expect(testDuration).toBeInTheDocument();
    const testDescription = canvas.getByText("Michael Moore's view on what happened to the United States after September 11 and how the Bush Administration allegedly used the tragic event to push forward its agenda for unjust wars in Afghanistan and Iraq.");
    expect(testDescription).toBeInTheDocument();
  }
};