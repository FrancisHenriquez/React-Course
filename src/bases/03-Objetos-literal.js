const persona ={
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 'Infinit',
    direccion:{
        ciudad:'New York',
        zipcode: '33126',
        latitud:'11234445'
    }

}

console.log(persona);

const persona2 = persona;
persona.nombre = 'Peter';

console.log(persona2)