import {heroes} from '../data/heroes';

export const getHeroById = (id) => heroes.find((heroe => heroe.id))

console.log(getHeroById(23))

 export const getHeroByOwner = (owner) => heroes.filter(heroe => heroe.owner)

console.log(getHeroByOwner(23))

// export default getHeroById;