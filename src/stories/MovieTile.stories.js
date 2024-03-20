import  MovieTile  from '../components/main/results/MovieTile';
import { within, expect } from '@storybook/test';

export default {
  title: 'App/MovieTile',
  component: MovieTile,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
  },
};

const testMovie = {
    "id": "6",
    "imageUrl": "https://m.media-amazon.com/images/I/51URq2GUSaL._AC_UF894,1000_QL80_.jpg",
    "title": "Troy",
    "releaseYear": "2002",
    "genres": ["Adventure","Drama"],
    "rating": "7.3",
    "duration": "2h 43min",
    "description": "An adaptation of Homer's great epic, the film follows the assault on Troy by the united Greek forces and chronicles the fates of the men involved."
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
  
      const movieTile = canvas.getByTestId("movieTile");
      expect(movieTile).toBeInTheDocument();
      const testTitle = canvas.getByText("Troy");
      expect(testTitle).toBeInTheDocument();
      const testReleaseYear = canvas.getByText("2002");
      expect(testReleaseYear).toBeInTheDocument();
      const testGenres = canvas.getByText("Adventure, Drama");
      expect(testGenres).toBeInTheDocument();
    }
  };

  