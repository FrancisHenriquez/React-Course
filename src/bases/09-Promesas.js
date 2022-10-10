import { getHeroById } from "./bases/08-Import.js";
import {heroes} from "./data/heroes.js";

const promesa = new Promise((resolve, reject) => {
    setTimeout(() =>{
        const heroes = getHeroById(2);
        resolve(heroes)
    },2000
    )
});

promesa.then ( ()=> {
    console.log('Heroes',heroes)
})
.catch (err => console.warn (err))
