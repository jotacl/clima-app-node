const axios = require('axios');


const getClimaPorUbicacion = async(lat, lon) => {

    // const encodedUrl = encodeURI(dir);
    // console.log(encodedUrl);
    const apikey = '67cc1e331b535000d78101f4c44ab12c';
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}9&appid=${apikey}&units=metric`,


    });




    const resp = await instance.get();

    //console.log(resp.data.main.temp);

    return resp.data.main.temp;

}


module.exports = {
    getClimaPorUbicacion
}