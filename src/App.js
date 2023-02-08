// Libraries
import { Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header'
import Footer from "./components/Footer";
import Detalle from "./components/Detalle";
import Resultados from "./components/Resultados";
import AnimacionHome from "./components/AnimacionHome";

// styles
import './css/bootstrap.min.css';
import './css/app.css'

function App() {

  const addOrRemoveFromFavs = () => {
    console.log('Ok funciono');
  }

  return (
    <>
    <Header />
    <AnimacionHome />

      <div className="container">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/listado' render={ (props) => <Listado addOrRemoveFromFavs={addOrRemoveFromFavs} {...props} />} />
          <Route path='/detalle' element={<Detalle />} />
          <Route path='/resultados' element={<Resultados />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
