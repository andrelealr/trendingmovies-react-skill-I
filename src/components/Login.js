import axios from "axios";
import swal from '@sweetalert/with-react';
import { useNavigate, Navigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
        // validación campos vacíos

        if (email ==='' || password === '') {
            swal (
                <h2>Los campos no pueden estar vacíos</h2>
            );
            return;
        };

        // validación email con expresión regular

        if (email !=='' && !regexEmail.test(email)){
            swal(
                <h2>Debes escribir una direccion de correo electronico valida</h2>
            );
            return;
        };

        if (email !== 'challenge@alkemy.org' || password !== 'react'){
            swal (
                <h2>Credenciales inválidas</h2>
            );
            return;
        };


        // envió de la información del formulario
        axios
            .post('http://challenge-react.alkemy.org', { email, password })
            .then (res => {  
                swal (
                    <h2>Excelente, ingresaste correctamente</h2>
                );
                    console.log(res.data);
                    const tokenRecibido = res.data.token;
                    sessionStorage.setItem('token', tokenRecibido);
                    navigate('/listado');
                });
    }

    let token =  sessionStorage.getItem('token');

    return (
        <>          
        { token && <Navigate to="/listado" replace />}
            <h2>Formulario de Login</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <span>Correo Eléctronico:</span>
                    <br/>
                    <input type="text" name="email" /> 
                </label>
                <br />
                <label>
                    <span>Contraseña:</span>
                    <br/>
                    <input type="password" name="password" />
                </label>
                <br/>
                <br/>
                <button type="submit">Ingresar</button>
            </form>
        </>
    )
}


export default Login;