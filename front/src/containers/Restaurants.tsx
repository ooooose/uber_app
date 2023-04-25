import React, { useEffect } from 'react';
// apis
import { fetchRestaurants } from '../apis/restaurants';


const Restaurants: React.FC = () => {
    useEffect(() => {
        fetchRestaurants()
        .then((data) => console.log(data))
    }, []);
    return (
        <>
            <h1>レストラン一覧!!</h1>
        </>
    )
}

export default Restaurants;
