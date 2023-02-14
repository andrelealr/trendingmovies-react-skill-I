import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import '../css/app.css';

function Listado () {
    let token =  sessionStorage.getItem('token');

    const [moviesList, setMoviesList ] = useState([]);
    const [next, setNext] = useState(1);

  useEffect(() => {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=ff89b20f3f005d0d7c8f063014a8cc6b&language=ES-US&page=1';
        axios
            .get(endPoint)
            .then(response => {
                const apiData= response.data;
                setMoviesList(apiData.results);
            })
            .catch(error => 
                Swal.fire (
                    '<h2>Hubo errores, intenta mas tardes</h2>'
                )
            )
    }, [setMoviesList]);

    const last = ()=> next === 1 ? 1 : setNext(next - 1);


    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=ff89b20f3f005d0d7c8f063014a8cc6b&language=ES-US&page=${next}`)
             .then(res => setMoviesList(res.data.results))
             
      },[next]);
      
      

    return (
        <>
        <h1 className="buscaste-tittle text-center">Novedades en películas</h1>
        {/* Proteccion de ruta login / renderizado condicional */}
        {/* { !token && <Navigate to="/" replace />} */}
        <div className="container">
            <div className="row" id="listado">
        {
            moviesList.map((oneMovie) => {
                return(
                    <div className="col-6 col-md-4 col-lg-3 my-5" key={oneMovie.id}>
                        <div className="card h-100">  
                            <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..."/>
                            {/* <button className="favourite-btn"></button> */}
                            <div className="card-body">
                                <h5 className="card-title">{ oneMovie.title.substring(0,50) }...</h5>
                                {/* <p className="card-text">{ oneMovie.overview.substring(0,300) }...</p> */}
                                <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">Ver detalle</Link> {/* redirection a una ruta en particular o especifica*/}
                            </div>
                        </div>
                    </div>
                )
            })
        }
            </div>
        <div className="d-flex justify-content-center gap-4">
            <button onClick={last} className="btn btn-outline-primary"> anterior</button>
            <button onClick={()=> setNext(next + 1)} className="btn btn-outline-primary"> siguiente </button>
        </div>
      </div>

        </>
    )
}

export default Listado;

