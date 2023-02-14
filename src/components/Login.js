import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate, Navigate } from 'react-router-dom';
import AnimacionHome from "./AnimacionHome";

function Login() {

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
        // validación campos vacíos

        if (email ==='' || password === '') {
            Swal (
                <h2>Los campos no pueden estar vacíos</h2>
            );
            return;
        };

        // validación email con expresión regular

        if (email !=='' && !regexEmail.test(email)){
            Swal(
                <h2>Debes escribir una direccion de correo electronico valida</h2>
            );
            return;
        };

        if (email !== 'challenge@alkemy.org' || password !== 'react'){
            Swal (
                <h2>Credenciales inválidas</h2>
            );
            return;
        };


        // envió de la información del formulario
        axios
            .post('https//challenge-react.alkemy.org', { email, password })
            .then (res => {  
                Swal.fire (
                    '<h2>Excelente, ingresaste correctamente</h2>'
                );
                    console.log(res.data);
                    const tokenRecibido = res.data.token;
                    sessionStorage.setItem('token', tokenRecibido);
                    navigate('/listado');
                })
    }

    let token =  sessionStorage.getItem('token');

    return (
        <>         
        <AnimacionHome /> 
        { token && <Navigate to="/listado" replace />}
        <div className="login mt-5 pt-5">
            <h2 className="text-center">Ingresa con el usuario de prueba:</h2>
            <h6 className="text-center mb-4">(correo: challenge@alkemy.org / clave: react)</h6>
            <form className="text-center mt-3" onSubmit={submitHandler}>
                <label>
                    <span>Correo Eléctronico:</span>
                    <br/>
                    <input type="text" name="email" className="rounded pe-5" /> 
                </label>
                <br />
                <label>
                    <span>Contraseña:</span>
                    <br/>
                    <input type="password" name="password" className="rounded pe-5" />
                </label>
                <br/>
                <br/>
                <button type="submit" className="btn btn-primary mx-auto">Ingresar</button>
            </form>
         </div>
        </>
    )
}


export default Login;
