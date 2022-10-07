const personajes = ['goku','vegeta','trunks']
const [, p2] = personajes;
console.log (p2)

const retornoArreglo = ( ) =>{
    return ['ABC', 123]
}
const [letras, numeros]= retornoArreglo();

console.log(letras, numeros);

//Tarea
//1. el primer valor del arr se llamara nombre
// 2. se llamara setNombre

const useState = (valor) =>{
    return [valor, ()=>{console.log('Hola Mundo')}];

}
const [nombre, setNombre] = useState('goku');
console.log(nombre)
setNombre();

noTrust ( )