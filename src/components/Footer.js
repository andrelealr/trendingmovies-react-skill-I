import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../css/footer.css'

function Footer() {
    return(

            <footer className="bg-dark text-center text-white sticky-bottom">
                <div className="p-4 pb-0">
                    <section>
                        <FaFacebook size="20" className="me-3" />
                        <FaTwitter size="20" className="me-3"/>
                        <FaInstagram size="20" />
                    </section>
                </div>
                <div className="text-center p-3">
                    © 2023 Copyright Andrea Leal
                </div>
            </footer>
    )
}

export default Footer;
