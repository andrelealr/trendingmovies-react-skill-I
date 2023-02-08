import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "@sweetalert/with-react";

function Resultados () {

    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    const [moviesResults, setMoviesResults] = useState([]);

    useEffect(() => {
        const endPoint= `https://api.themoviedb.org/3/search/movie?api_key=ff89b20f3f005d0d7c8f063014a8cc6b&language=es-ES&page=1&include_adult=false&query=${keyword}`
        axios
            .get(endPoint)
            .then(response => {
                const movieArray= response.data.results;

                if (movieArray.length === 0) {
                    swal (<h4>Tu búsqueda no arrojo resultados. Vuelve a intentarlo</h4>);
                } 

                setMoviesResults(movieArray);

            })
            .catch(error => {
                console.log(error);
            })
    }, [keyword]);

    return(
        <>
        <h2>Buscaste <em>{keyword}</em></h2>
        {moviesResults.length === 0 && <h3>No hay resultados</h3>}
            <div className="row" id="resultados">
        {
            moviesResults.map((oneMovie) => {
                return(
                    <div className="col-4 my-5"  key={oneMovie.id}>
                        <div className="card">  
                            <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top " alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title mb-3">{ oneMovie.title.substring(0,30) }...</h5>
                                <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">Ver detalle</Link>
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

export default Resultados;