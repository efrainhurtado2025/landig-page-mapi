import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'
import './Contact.css'

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const name = formData.get('name')
        const service = formData.get('service')
        const message = formData.get('message')
        const whatsappMsg = encodeURIComponent(
            `Hola MAPI! Soy ${name}. Estoy interesado en: ${service}. ${message}`
        )
        window.open(`https://wa.me/573176968040?text=${whatsappMsg}`, '_blank')
    }

    return (
        <section className="contact" id="contact">
            <div className="container">
                <motion.div
                    className="contact-info"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={fadeInUp}
                >
                    <span className="section-label">Contacto</span>
                    <h2 className="section-title">¿Listo para empezar?</h2>
                    <p className="contact-text">
                        Contáctanos y un asesor te ayudará a elegir el plan perfecto para tus
                        necesidades académicas. ¡Estamos aquí para ayudarte!
                    </p>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <div className="detail-icon"><FaEnvelope /></div>
                            <div className="detail-content">
                                <div className="detail-label">Email</div>
                                <div className="detail-value">info@mapi.edu.co</div>
                            </div>
                        </div>
                        <div className="contact-detail">
                            <div className="detail-icon"><FaPhone /></div>
                            <div className="detail-content">
                                <div className="detail-label">Teléfono</div>
                                <div className="detail-value">+57 317 696 8040</div>
                            </div>
                        </div>
                        <div className="contact-detail">
                            <div className="detail-icon"><FaMapMarkerAlt /></div>
                            <div className="detail-content">
                                <div className="detail-label">Ubicación</div>
                                <div className="detail-value">Colombia — 100% Online</div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-socials">
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" aria-label="TikTok"><FaTiktok /></a>
                    </div>
                </motion.div>

                <motion.div
                    className="contact-form-wrapper"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={fadeInUp}
                >
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Nombre completo</label>
                                <input type="text" id="name" name="name" placeholder="Tu nombre" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="tu@email.com" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="service">Servicio de interés</label>
                            <select id="service" name="service" required>
                                <option value="">Selecciona un servicio</option>
                                <option value="Tutoría Académica">Tutoría Académica</option>
                                <option value="Solución de Parciales">Solución de Parciales</option>
                                <option value="Quices & Evaluaciones">Quices & Evaluaciones</option>
                                <option value="Talleres">Talleres</option>
                                <option value="Clases en Vivo">Clases en Vivo & Virtual</option>
                                <option value="Curso Completo">Curso Completo</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" name="message" placeholder="Cuéntanos qué necesitas..." rows="4"></textarea>
                        </div>
                        <button type="submit" className="btn-primary">
                            Enviar mensaje
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
