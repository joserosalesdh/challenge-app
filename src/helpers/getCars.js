

export const getCars = async () => {
    console.log('hola')

    const url = `https://challenge.agenciaego.tech/models#`;
    console.log(url)

    const resp = await fetch(url);
    console.log(resp)
    const respJSON = await resp.json();

    console.log(respJSON);

}