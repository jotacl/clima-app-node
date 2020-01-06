const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);
    // console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,

        headers: {
            'X-RapidAPI-Key': '243ce9ae30msha145bbbc8d51917p131582jsnf62dd878766a',
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    });

    // instance.get()
    //     .then(
    //         resp => {
    //             console.log(resp.data.Results[0]);
    //         }
    //     ).catch(
    //         err => {
    //             console.log('Error : ', err);
    //         }
    //     )



    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }

}


module.exports = {
    getLugarLatLng
}