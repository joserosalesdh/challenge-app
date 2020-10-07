import React from 'react';
import { useParams } from 'react-router-dom';
import { useRequest } from '../hooks/useRequest';

const CarScreen = () => {

    const { carId } = useParams();

    const idCorrecto = carId - 1;

    console.log(carId)
    console.log(idCorrecto)

    const { data, isLoaded, error } = useRequest(`https://challenge.agenciaego.tech/models`);

    // console.log(data[carId - 1])

    const autoEncontrado = data.find(item => item.id === carId);

    console.log(autoEncontrado)

    return (
        <div>

            {error && <div>Something went wrong ...</div>}

            {isLoaded ? (
                <div>Loading...</div>
            ) : (

                    <>
                        <h1>Car Screen {carId} </h1>

                        {
                            data.find(item => (
                                item.id === carId
                            ))

                        }

                    </>

                )}




        </div>
    )
}

export default CarScreen
