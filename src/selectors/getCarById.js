import React from 'react';

export const gerCarById = (id) => {

    const url = "https://challenge.agenciaego.tech/models#";

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

    return data.find(car => car.id === id);

}