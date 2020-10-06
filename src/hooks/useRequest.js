import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useRequest = (url) => {

    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setError(false);
            setIsLoaded(true);

            try {
                const result = await axios(url);

                setData(result.data);

            } catch (error) {
                setError(true);
            }

            setIsLoaded(false);
        };

        fetchData();

    }, [url]);

    return { data, isLoaded, error };

}

