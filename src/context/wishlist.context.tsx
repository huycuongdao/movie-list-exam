import { ComponentType, createContext, PropsWithChildren, useState } from "react";
import { Movie } from "../types/movie";

interface WishListContext {
  wishlist: Movie[];
  updateWishlist: (movie: Movie) => void;
}

const initialContext: WishListContext = {
  wishlist: [],
  updateWishlist: () => undefined,
};

export const ChapterEditorPageContext = createContext<WishListContext>(initialContext);

const WishListContextProvider = (props: PropsWithChildren<{}>) => {
  const { children } = props;

  const [wishlist, setWishlist] = useState<Movie[]>([]);

  const updateWishlist = (movie: Movie) => {
    const index = wishlist.findIndex((_movie) => _movie.id === movie.id);
    const isInWishlist = index >= 0;

    let updated: Movie[] = [];
    if (isInWishlist) {
      updated = [...wishlist];
      updated.splice(index, 1);
    } else {
      updated = [...wishlist];
      updated.push(movie);
    }

    setWishlist(updated);
  };

  const value: WishListContext = {
    wishlist,
    updateWishlist,
  };

  return <ChapterEditorPageContext.Provider value={value}>{children}</ChapterEditorPageContext.Provider>;
};

export const withWishlistContext = <T extends object>(WrappedComponent: ComponentType<T>) =>
  function (props: T) {
    return (
      <WishListContextProvider>
        <WrappedComponent {...props} />
      </WishListContextProvider>
    );
  };
