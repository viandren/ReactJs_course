import  MovieTile  from '../components/main/results/MovieTile';

export default {
  title: 'App/MovieTile',
  component: MovieTile,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Rendered = {
  args: {
    movie: {
        "id": "6",
        "imageUrl": "troy.jpg",
        "title": "Troy",
        "releaseYear": "2002",
        "genres": "Adventure, Drama",
        "rating": "7.3",
        "duration": "2h 43min",
        "description": "An adaptation of Homer's great epic, the film follows the assault on Troy by the united Greek forces and chronicles the fates of the men involved."
    }
  },
};

