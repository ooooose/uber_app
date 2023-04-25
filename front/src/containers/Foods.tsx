import React from 'react';
import { useParams } from 'react-router-dom';

const Foods: React.FC = () => {
    const urlParams = useParams<{ restaurantsId: string }>()
    return (
        <>
            <h1>Food一覧!</h1>
            <h3>restaurantsIdは{urlParams.restaurantsId}です!</h3>
        </>
    )
}

export default Foods;
