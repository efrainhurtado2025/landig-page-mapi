import { motion } from 'framer-motion'
import {
    FaChalkboardTeacher,
    FaFileAlt,
    FaClipboardList,
    FaTools,
    FaVideo,
    FaBookReader
} from 'react-icons/fa'
import './Services.css'

const services = [
    {
        icon: <FaChalkboardTeacher />,
        title: 'Tutorías Académicas',
        desc: 'Sesiones personalizadas con tutores expertos en tu materia. Aprende a tu ritmo con atención one-on-one.'
    },
    {
        icon: <FaFileAlt />,
        title: 'Solución de Parciales',
        desc: 'Te ayudamos a prepararte y resolver parciales con explicaciones detalladas paso a paso.'
    },
    {
        icon: <FaClipboardList />,
        title: 'Quices & Evaluaciones',
        desc: 'Preparación enfocada para quices y evaluaciones cortas. Maximiza tu nota con nuestras estrategias.'
    },
    {
        icon: <FaTools />,
        title: 'Talleres Prácticos',
        desc: 'Resolución guiada de talleres y ejercicios prácticos con explicación de cada procedimiento.'
    },
    {
        icon: <FaVideo />,
        title: 'Clases en Vivo & Virtual',
        desc: 'Clases interactivas en tiempo real o grabadas para que estudies cuando quieras, donde quieras.'
    },
    {
        icon: <FaBookReader />,
        title: 'Cursos Completos',
        desc: 'Programas estructurados desde cero hasta nivel avanzado en las materias más demandadas.'
    }
]

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: i * 0.1, ease: 'easeOut' }
    })
}

function Services() {
    return (
        <section className="services" id="services">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-label">Servicios</span>
                    <h2 className="section-title">Todo lo que necesitas para triunfar</h2>
                    <p className="section-subtitle">
                        Desde tutorías individuales hasta cursos completos, cubrimos todas tus necesidades académicas.
                    </p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            className="service-card"
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            variants={cardVariants}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
