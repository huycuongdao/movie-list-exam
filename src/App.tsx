import { QueryClient, QueryClientProvider } from "react-query";
import MovieListPage from "./pages/MovieListPage";

/*
## Requirements:
  - Movie List
    - Render movie data
      - Data source: https://developers.themoviedb.org
      - API key：`ba9e9eb1cba46fa2c366ab90f70a5dbe` 
    - Show popular movies as default (without search keywords)
      - API document：https://developers.themoviedb.org/3/movies/get-popular-movies
      - Show top 20 records
    - Show loading UI before retrieving data from API
    - Show error UI if failed to retrieve data
    - Show empty UI if there isn't any data in the list
  - Complete the "Movie" component
    - Show "Title", "Production Year" and "Add to Wishlist" button (a heart icon button)
    - When user clicked on the heart icon button, the movie will be added to user's wishlist and the heart icon will become solid
    - If user clicked on a solid heart icon button, the movie will be removed from the wishlist
    - The movies in the wishlist will remain after user refreshed the page
  - Search movie
    - API document：https://developers.themoviedb.org/3/search/search-movies
    - User can search movies by entering keywords in the input field, the result will replace the original data in the movie list
    - Show top 20 records
    - Show empty result UI if there is no mated result
  - Wishlist
    - Clicking the "Wishlist" button on the top-right will open the wishlist modal
    - The list will display all movies that was added to the wishlist by the user
    - Clicking on the solid heart icon button on the movie will remove the corresponding movie from the wishlist
## Bonus
  - Lazy load
    - Implement "Load More" button
      - When Popular Movies or search results has more than 20 records, please show the “Load More” button at the bottom of the movie list or search result
      - Load 20 records after the Load More button is clicked
      - While loading the records, show Load More button in Loading state
      - If all records are fully displayed, the Load More button will disappear
    - Implement "Back to Top" button
      - Page will automatically scroll to top of the Popular Movies list or search result list after clicking the button
  - Refactor components
*/

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieListPage />
    </QueryClientProvider>
  );
};

export default App;
