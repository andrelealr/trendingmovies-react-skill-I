import Typical from "react-typical";
import '../css/app.css'

function animacionHome() {
    return (
        <section className="trending-tittle text-white">
            <h1 className="mb-3 text-center">En Trending Movies encuentras</h1>
            <h1 className="mb-3 text-center">   
                <Typical
                loop = {Infinity}
                wrapper = "b"
                steps={[
                'los estrenos',
                
                1000,
                'las reviews',
                1000,
                'los ratings',
                1000,
                'y mucho más',
                1000,
                'de tus películas',
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