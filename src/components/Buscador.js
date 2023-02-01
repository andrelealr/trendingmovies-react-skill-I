import { useNavigate } from 'react-router-dom';
import swal from "@sweetalert/with-react";

function Buscador () {
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();

   
    const keyword = e.currentTarget.keyword.value.trim();

    console.log(keyword)

  //  Validación formulario
    if(keyword.length === 0) {
      swal (<h4>Tienes que escribir una palabra en la búsqueda</h4>)
    } else if (keyword.length < 4) {
      swal (<h4>Ingresa más de 4 caracteres</h4>)
    } else {
      navigate(`/resultados?keyword=${keyword}`)
    }
  }

  return (
    <form className="d-flex me-5 pe-5" onSubmit={submitHandler}>
      <input className="form-control me-2 col-2" type="search" placeholder="Buscar película" aria-label="Search" name="keyword" />
      <button className="btn btn-outline-primary btn-sm">Buscar</button>
    </form>
  )
}

export default Buscador; 
