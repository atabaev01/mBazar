import React from 'react';

const FavoritCategory = ({category}) => {
    return (
        <a href="#" className="fav-category p-5">
            <img src={category.image} alt="sss"></img>
            <h2 className="text-center">{category.title}</h2>
        </a>
    );
};

export default FavoritCategory;