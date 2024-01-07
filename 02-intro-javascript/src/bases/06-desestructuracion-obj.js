//desestructuración

const persona = {
    nombre : 'Tony',
    edad : 45,
    clave : 'Ironman',
    latLong:{
        lat : 1526326336,
        long : 267236326
    }
};

//const { nombre ,edad, clave} = persona

//console.log( nombre );
//console.log( edad );
//console.log( clave );

const useContext = ({ clave, nombre , edad, rango = 'Capitán'}) => {
    return {
        nombreClave : clave,
        anios : edad
    }
}
const avenger = useContext(persona);

const {nombreClave, anios, latLong : {lat,long}} = avenger;

console.log(nombreClave, anios);
console.log(lat, long);