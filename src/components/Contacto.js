
function Contacto() {
    return (
        <>
        <form className="container" id="contacto">
            <div className="mb-3 mt-5">
                <label for="exampleInputEmail1" className="form-label">Nombre</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="John Doe"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com"/>
                    <div id="emailHelp" className="form-text">Nunca compartiremos tu email.</div>
            </div>
            <div className="mb-3">
                <label for="disabledSelect" className="form-label">Escribe aquí tu mensaje</label>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea" placeholder="Leave a comment here"></label>
                </div>
            </div>
            <button type="button" className="justify-end btn btn-primary mt-5" title="Presiona para enviar a tu correo">Enviar
            </button>
        </form>
    </>
    );
}

export default Contacto;