const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')



const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la cuidad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async(direccion) => {

    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClimaPorUbicacion(coord.lat, coord.lng);
        return (`el clima de ${direccion} es de ${temp}`)
    } catch (error) {
        return (`no se pudo determinar el clima de ${direccion} `)
    }
}




getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)





//console.log(argv.direccion);