import heroes from './data/heroes.js'

console.log(heroes)


const getHeroById = (id) => heroes.find((heroe => heroe.id))


console.log(getHeroById(2));