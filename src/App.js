// Libraries
import { Route, Routes } from "react-router-dom";
// import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header'
import Footer from "./components/Footer";
import Detalle from "./components/Detalle";
import Resultados from "./components/Resultados";
import Contacto from "./components/Contacto";


// styles
import './css/bootstrap.min.css';
import './css/app.css'

function App() {

  return (
    <>
    <Header />
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          <Route path='/' element={<Listado />} />
          <Route path='/detalle' element={<Detalle />} />
          <Route path='/resultados' element={<Resultados />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>


      <Footer />
    </>
  );
}

export default App;
