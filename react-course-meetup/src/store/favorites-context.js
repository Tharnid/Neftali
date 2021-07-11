import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
}); // Camel case for Component names

export function FavoritesContextProvider(props) {
    // provides the Favorites component to all things that are interested in it
    // will also update context values
    // needs to be wrapped around all components that want values
    // manages context data

    const [userFavorites, setUserFavorites] = useState([]);

    // Favorites Handlers
    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites)=> {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children} 
        </FavoritesContext.Provider>    
    );
}

// export default FavoritesContent; LOL
export default FavoritesContext;
