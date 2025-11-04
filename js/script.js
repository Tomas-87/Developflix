import peliculas from './peliculas.js';

const accion = document.getElementById('genero-28');
const thriller = document.getElementById('genero-53');
const aventura = document.getElementById('genero-12');

const urlPelis = `https://image.tmdb.org/t/p/w500`;

console.log(peliculas)

const template = (peli) => `
    <div class="pelicula">
        <img src="${urlPelis}${peli.poster_path}" alt="${peli.title}">
        <h3>${peli.title}</h3>
    </div> 
    `

function peliList(genero) {
    const pelisFilter = peliculas.filter(peli => peli.genre_ids.includes(genero));
    return pelisFilter.map(peli => template(peli)).join('');
}

accion.innerHTML = peliList(28);
thriller.innerHTML = peliList(53);
aventura.innerHTML = peliList(12);