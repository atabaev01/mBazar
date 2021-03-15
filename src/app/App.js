import React, { useState } from 'react';
import Home from '../screens/home/Home';
import categoriesData from "../data/categories"

const App = () => {
    const [categories, setCategories] = useState(categoriesData)
    return (
        <div className='container border shadow-sm mt-5 roundet'>
            <h1>Mal bazar</h1>
            <main>
                <Home categories={categories}/>
            </main>
        </div>
    );
};

export default App;