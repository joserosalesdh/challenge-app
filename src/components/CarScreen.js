import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useRequest } from '../hooks/useRequest';

const CarScreen = () => {

    const { carId } = useParams();

    const { data } = useRequest(`https://challenge.agenciaego.tech/models${carId}`);
    console.log(carId)

    return (
        <div>

            <h1>Car Screen {carId} </h1>

        </div>
    )
}

export default CarScreen
