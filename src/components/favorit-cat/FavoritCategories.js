import React from 'react';
import FavoritCategory from './FavoritCategory';
import './favoritecat.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

const FavoritCategories = ({ categories }) => {
    return (
        <div className="d-flex facat">
            <Swiper
                slidesPerView={4}
            >
                {categories.map((category) => (
                    <SwiperSlide> <FavoritCategory category={category} /> </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FavoritCategories;