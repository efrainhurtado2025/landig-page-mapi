import { motion } from 'framer-motion'
import { FaBullseye, FaRocket } from 'react-icons/fa'
import './MissionVision.css'

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' }
    })
}

function MissionVision() {
    return (
        <section className="mission-vision" id="mission">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-label">Nuestro propósito</span>
                    <h2 className="section-title">Misión & Visión</h2>
                    <p className="section-subtitle">Lo que nos mueve y hacia dónde vamos</p>
                </motion.div>

                <div className="mv-grid">
                    <motion.div
                        className="mv-card"
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={cardVariants}
                    >
                        <div className="mv-icon"><FaBullseye /></div>
                        <h3 className="mv-title">Misión</h3>
                        <p className="mv-text">
                            Brindar acompañamiento académico de calidad a través de tutorías
                            personalizadas, solución de evaluaciones y cursos especializados,
                            utilizando metodologías innovadoras que potencien el aprendizaje
                            y el rendimiento de cada estudiante.
                        </p>
                    </motion.div>

                    <motion.div
                        className="mv-card"
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={cardVariants}
                    >
                        <div className="mv-icon"><FaRocket /></div>
                        <h3 className="mv-title">Visión</h3>
                        <p className="mv-text">
                            Ser la plataforma líder en servicios de tutorías académicas en
                            Latinoamérica, reconocida por transformar la experiencia educativa
                            de miles de estudiantes a través de la tecnología y la excelencia
                            pedagógica.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default MissionVision
