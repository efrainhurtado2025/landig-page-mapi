import { motion } from 'framer-motion'
import { FaGraduationCap, FaCheck, FaStar } from 'react-icons/fa'
import './Hero.css'

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>

            <div className="container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Plataforma #1 en tutorías académicas
                    </div>

                    <h1 className="hero-title">
                        Tu éxito académico <br />
                        <span className="highlight">empieza aquí</span>
                    </h1>

                    <p className="hero-description">
                        Tutorías personalizadas, solución de parciales, quices, talleres y cursos completos
                        con los mejores tutores. Aprende a tu ritmo, en vivo o virtual.
                    </p>

                    <div className="hero-buttons">
                        <a href="#contact" className="btn-primary">
                            Comenzar ahora
                        </a>
                        <a href="#services" className="btn-outline">
                            Ver servicios
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Estudiantes activos</div>
                        </div>
                        <div className="hero-stat">
                            <div className="stat-number">98%</div>
                            <div className="stat-label">Tasa de aprobación</div>
                        </div>
                        <div className="hero-stat">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Tutores expertos</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                >
                    <div className="hero-card-stack">
                        <motion.div
                            className="hero-floating-card card-top"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <span className="check-icon"><FaCheck /></span>
                            Parcial aprobado ✨
                        </motion.div>

                        <div className="hero-card hero-card-main">
                            <div className="card-header">
                                <div className="card-icon">
                                    <FaGraduationCap />
                                </div>
                                <div>
                                    <div className="card-title">Tutoría en Curso</div>
                                    <div className="card-subtitle">Cálculo Diferencial</div>
                                </div>
                            </div>
                            <div className="card-subjects">
                                <span className="subject-tag">Límites</span>
                                <span className="subject-tag">Derivadas</span>
                                <span className="subject-tag">Integrales</span>
                                <span className="subject-tag">Series</span>
                            </div>
                            <div className="card-progress">
                                <div className="progress-bar">
                                    <div className="progress-fill"></div>
                                </div>
                                <span className="progress-label">85%</span>
                            </div>
                        </div>

                        <motion.div
                            className="hero-floating-card card-bottom"
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                        >
                            <div className="rating-stars">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                            <div className="rating-text">
                                <strong>4.9/5</strong> — 200+ reseñas
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
