import { motion } from 'framer-motion'
import { FaUsers, FaLaptop, FaClock, FaShieldAlt, FaBookOpen } from 'react-icons/fa'
import './About.css'

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <motion.div
                    className="about-visual"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={fadeInUp}
                >
                    <div className="about-image-wrapper">
                        <div className="about-illustration">
                            <FaBookOpen className="illust-icon" />
                            <span className="illust-text">Aprendizaje sin límites</span>
                        </div>
                    </div>
                    <div className="about-experience-badge">
                        <div className="exp-number">5+</div>
                        <div className="exp-label">Años de experiencia</div>
                    </div>
                </motion.div>

                <motion.div
                    className="about-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={fadeInUp}
                >
                    <span className="section-label">Quiénes Somos</span>
                    <h2 className="section-title">Impulsamos tu rendimiento académico</h2>
                    <p className="about-text">
                        En <strong>MAPI</strong> somos un equipo apasionado de profesionales y educadores
                        comprometidos con el éxito académico de cada estudiante. Ofrecemos acompañamiento
                        personalizado en todas las áreas del conocimiento, adaptándonos a tu ritmo y
                        necesidades. Nuestra metodología combina tecnología, experiencia y un enfoque humano
                        para garantizar resultados reales.
                    </p>

                    <div className="about-features">
                        <div className="about-feature">
                            <div className="feature-icon"><FaUsers /></div>
                            <span className="feature-text">Tutores certificados</span>
                        </div>
                        <div className="about-feature">
                            <div className="feature-icon"><FaLaptop /></div>
                            <span className="feature-text">Clases en vivo y virtual</span>
                        </div>
                        <div className="about-feature">
                            <div className="feature-icon"><FaClock /></div>
                            <span className="feature-text">Horarios flexibles</span>
                        </div>
                        <div className="about-feature">
                            <div className="feature-icon"><FaShieldAlt /></div>
                            <span className="feature-text">Resultados garantizados</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
