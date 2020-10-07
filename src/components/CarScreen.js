import React from 'react';
import { useParams } from 'react-router-dom';
import { useRequest } from '../hooks/useRequest';

const CarScreen = () => {

    const { carId } = useParams();

    const { data, isLoaded, error } = useRequest(`https://challenge.agenciaego.tech/models`);

    const resultado = data.find(auto => auto.id == carId);

    console.log(resultado)

    return (
        <div>

            {error && <div>Something went wrong ...</div>}

            {isLoaded ? (
                <div>Loading...</div>
            ) : (

                    <>
                        <h1> {resultado.id} </h1>

                    </>

                )}




        </div>
    )
}

export default CarScreen
