const API_SERVER = 'https://api.themoviedb.org/3';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzIzMzI1YzE3NzUxNmFhZmJmOTk5OWVjMDZmMzdjZSIsInN1YiI6IjY2NTdkZDQ4MWNmMTY0NjUxNTkzZDAyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x5E3uFQGhmWHoL_8F0FILwQGYlBRm3-OAllzSWyAT7o'
        
    }
};

const createElement = (tag, className, attributes = {}) => {
    const element = document.createElement(tag);
    if (className) {
        element.classList.add(className);
    }
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    
    return element;
};

// Function for fetching trending movies
const fetchTrending = async (page = 1) => {
    const response = await fetch(`${API_SERVER}/movie/popular?page=${page}`, options);
    const data = await response.json();
    const movies = data.results;

    const tendenciasContainer = document.querySelector('.tendenciasPeliculas .galeriaTendencias');
    
    tendenciasContainer.innerHTML = '';

    movies.forEach(movie => {
        const pelicula = createElement('div', 'pelicula');
        const anchor = createElement('a', '');
        anchor.href = './pages/detalle.html';
        const img = createElement('img', 'imgTendencia', {
            src: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            alt: movie.title,
            loading: 'lazy'
        });
        
        pelicula.append(img);
        anchor.appendChild(pelicula);
        const peliculaWrapper = createElement('div', 'peliculas');
        peliculaWrapper.appendChild(anchor);
        tendenciasContainer.appendChild(peliculaWrapper);
    });
};

// Function for fetching top rated movies
const fetchTopRated = async () => {
    const response = await fetch(`${API_SERVER}/movie/top_rated`, options);
    const data = await response.json();
    const movies = data.results;

    const topRatedContainer = document.querySelector('.galeriaPuntuadas');
    
    movies.forEach(movie => {
        const peliculaItem = createElement('div', 'peliculaItem');
        const img = createElement('img', 'imgAclamada', {
            src: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            alt: movie.title,
            loading: 'lazy'
        });
        
        peliculaItem.appendChild(img);
        topRatedContainer.appendChild(peliculaItem);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    fetchTrending();
    fetchTopRated();
});