import React, { useMemo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios';

const CarScreen = () => {

    const { carId } = useParams();

    const [data, setData] = useState([]);
    console.log(setData)

    const url = `https://challenge.agenciaego.tech/${carId}`;

    useEffect(() => {
        const fetchData = async () => {

            try {
                const result = await axios(url);

                setData(result.data);

            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [url]);

    const getCarById = (id) => {

        return data.find(car => car.id === id);
    };

    const car = useMemo(() => getCarById(carId), [carId])
    console.log(car)

    return (
        <div>

            <h1>Car Screen</h1>

            {/* <h2>{carId} - {data.name}</h2> */}


        </div>
    )
}

export default CarScreen
