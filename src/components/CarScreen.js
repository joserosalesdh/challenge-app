import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom';

const CarScreen = () => {

    const getCarById = (id) => {

        return heroes.find(heroe => heroe.id === id);
    };

    const { carId } = useParams();

    const car = useMemo(() => getCarById(carId), [carId])
    console.log(car)

    if (!car) {
        return <Redirect to="/" />
    };



    return (
        <div>
            <h1>Car Screen</h1>


        </div>
    )
}

export default CarScreen
