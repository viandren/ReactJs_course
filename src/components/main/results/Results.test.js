
import Results from "./Results.js";
import { render, screen, cleanup, fireEvent, waitFor } from "@testing-library/react";

import { QueryClient, QueryClientProvider } from 'react-query';
import nock from "nock";

const SERVER_HOST = 'http://localhost:4000';

describe ("Results", () => {

    beforeAll(() => {
      
        const expectation = nock(SERVER_HOST)
        .defaultReplyHeaders({
           'access-control-allow-origin': '*',
           'access-control-allow-credentials': 'true' 
         })
        .get('/movies?sortBy=release_date&sortOrder=asc&limit=100').reply(200,  {"data":[{
            "id": "1",
            "poster_path": "testImageUrl",
            "title": "testTitle",
            "release_date": "1995-02-12",
            "genres": ["testGenres"],
            "vote_average": "testRating",
            "runtime": "92",
            "overview": "testDescription"
        }]})
    });

    afterEach(() => {
        cleanup(); 
        nock.cleanAll();
    })
    
    it('Results is rendered', async () => {

        renderComponent();
        await waitFor(() => {
            const results = screen.getByTestId("results");
            expect(results).toBeInTheDocument();
        })

        const movieTile = screen.getByTestId("movieTile");
        expect(movieTile).toBeInTheDocument();
        const testTitle = screen.getByText("testTitle");
        expect(testTitle).toBeInTheDocument();
        const testReleaseYear = screen.getByText("1995");
        expect(testReleaseYear).toBeInTheDocument();
        const testGenres = screen.getByText("testGenres");
        expect(testGenres).toBeInTheDocument();
    })

});

function renderComponent() {
    render(createWrapper(<Results sortBy={''} setSelectedMovieId={() => {}}
        filterByGenre={'all'}
        searchByTitle={''}
      editMovie={() => {}}
      deleteMovie={() => {}}/>));
}


export const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: Infinity,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: console.log,
    }
  });

export function createWrapper(children) {
  const testQueryClient = createTestQueryClient();
  return <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>;
}