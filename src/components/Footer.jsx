import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">MAPI.</div>
                        <p className="footer-desc">
                            Tu aliado académico. Tutorías personalizadas, solución de evaluaciones
                            y cursos completos para alcanzar tu máximo potencial.
                        </p>
                    </div>

                    <div className="footer-column">
                        <h4>Navegación</h4>
                        <ul>
                            <li><a href="#about">Quiénes Somos</a></li>
                            <li><a href="#mission">Misión & Visión</a></li>
                            <li><a href="#services">Servicios</a></li>
                            <li><a href="#pricing">Precios</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Servicios</h4>
                        <ul>
                            <li><a href="#services">Tutorías Académicas</a></li>
                            <li><a href="#services">Solución de Parciales</a></li>
                            <li><a href="#services">Quices & Evaluaciones</a></li>
                            <li><a href="#services">Clases en Vivo</a></li>
                            <li><a href="#services">Cursos Completos</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© {currentYear} MAPI. Todos los derechos reservados.</span>
                    <div className="footer-bottom-links">
                        <a href="#">Privacidad</a>
                        <a href="#">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
