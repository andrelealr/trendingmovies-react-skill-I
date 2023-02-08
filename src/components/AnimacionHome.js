import Typical from "react-typical";
import '../css/app.css'

function animacionHome() {
    return (
        <section className="tendring-tittle">
            <h1 className="mt-5 pt-5 mb-3 text-center">En Trending Movies encuentra</h1>
            <h1 className="mb-3 text-center">   
                <Typical
                loop = {1}
                wrapper = "b"
                steps={[
                'los estrenos',
                
                1000,
                'las reviews',
                1000,
                'los ratings',
                1000,
                'y mucho mas',
                1000,
                'de tus peliculas',
                1000,
                'favoritas',
                1000,

                
                ]}
                />
            </h1>
        </section>
    )

};



export default animacionHome;