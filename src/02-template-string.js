const nombre = 'Francis'
const apellido = 'Henriquez'

const nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto);

function getSaludo (nombre){
    return 'Hola '+nombre;
}

console.log(`Esto es un texto: ${getSaludo (nombre)}`)