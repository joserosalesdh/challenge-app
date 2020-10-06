import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { getCarById } from '../selectors/getCarById';

const CarScreen = ({ history }) => {

    const { carId } = useParams();

    const car = useMemo(() => getCarById(carId), [carId])

    if (!car) { //si el hero no existe
        return <Redirect to="/" />
    };

    return (
        <div>
            <h1>Car Screen</h1>
        </div>
    )
}

export default CarScreen
