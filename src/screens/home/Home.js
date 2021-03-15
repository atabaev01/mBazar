import React from 'react';
import FavoritCategories from '../../components/favorit-cat/FavoritCategories';
import Search from '../../components/search/Search';

const Home = ({categories}) => {
    return (
        <div>
            <Search/>
            <FavoritCategories categories={categories}/>
        </div>
    );
};

export default Home;