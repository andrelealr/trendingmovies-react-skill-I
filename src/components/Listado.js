import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import swal from '@sweetalert/with-react';
import '../css/app.css'

function Listado (props) {
    let token =  sessionStorage.getItem('token');

    console.log(props);

    const [moviesList, setMoviesList ] = useState([]);

  useEffect(() => {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=ff89b20f3f005d0d7c8f063014a8cc6b&language=ES-US&page=1';
        axios
            .get(endPoint)
            .then(response => {
                const apiData= response.data;
                setMoviesList(apiData.results);
            })
            .catch(error => 
                swal (
                    <h2>Hubo errores, intenta mas tardes</h2>
                )
            )
    }, [setMoviesList]);

    console.log(moviesList)

    return (
        <>
        {/* Proteccion de ruta login / renderizado condicional */}
        { !token && <Navigate to="/" replace />}
      
        <div className="row" id="listado">
        {
            moviesList.map((oneMovie) => {
                return(
                    <div className="col-6 col-md-4 col-lg-3 my-5" key={oneMovie.id}>
                        <div className="card h-100">  
                            <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..."/>
                            <button className="favourite-btn"></button>
                            <div className="card-body">
                                <h5 className="card-title">{ oneMovie.title.substring(0,30) }...</h5>
                                <p className="card-text">{ oneMovie.overview.substring(0,500) }...</p>
                                <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">Ver detalle</Link> {/* redirection a una ruta en particular o especifica*/}
                            </div>
                        </div>
                    </div>
                )
            })
        }
      </div>

        </>
    )
}

export default Listado;

