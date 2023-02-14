import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";


function Detalle () {
    let token =  sessionStorage.getItem('token');

    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID');

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const endPoint= `https://api.themoviedb.org/3/movie/${movieID}?api_key=ff89b20f3f005d0d7c8f063014a8cc6b&language=es-ES`
        axios
            .get(endPoint)
            .then(response => {
                const movieData= response.data;
                setMovie(movieData);
                
            })
            .catch(error => {
                console.log(error);
            })
    }, [movieID]);

    
    
    return(
        <>
        {/* Proteccion de ruta login / renderizado condicional */}
        {/* { !token && <Navigate to="/" replace />} */}
        { !movie && <p>Cargando..</p>}
        { movie && (
            <>
            <div className="container" id="detalle">
                
                <div className="row">
                    <div className="col-4">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" alt="moviePoster"/>
                    </div>
                    <div className="col-8">
                    <h1 className="mb-5">Titulo: {movie.title}</h1>
                        <h5 className="mb-4">Fecha de estreno: {movie.release_date}</h5>
                        <h5>Reseña</h5>
                        <p>{movie.overview}</p> 
                        <h5>Rating: {movie.vote_average}</h5>
                        <h5 className="mt-3 mb-2">Géneros:</h5>
                        <ul>
                        {   movie.genres.map(( oneGenre ) => {
                                return(
                                    <li key={oneGenre.id}>{oneGenre.name}</li>
                                )
                            })
                        }
        
                        </ul>
                    </div>
                </div>
            </div>
            </>
        )}
        </>
    )
}

export default Detalle;