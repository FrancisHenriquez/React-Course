
const apiKey = 'j0PiP3bCpF3qnLQEWUkVFKtbVK1wdwLA';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
        .then(answ => answ.json())
        .then( ({data})  => {
            const {url} = data.images.original;
            const img = document.createElement ('img');
            img.src = url;
            document.body.append(img);
        })
.catch(console.warn);