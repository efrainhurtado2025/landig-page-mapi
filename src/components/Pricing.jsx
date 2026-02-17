import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'
import './Pricing.css'

const plans = [
    {
        name: 'Básico',
        price: '50K',
        period: 'por sesión',
        features: [
            'Tutoría individual 1 hora',
            'Resolución de dudas',
            'Material de apoyo digital',
            'Horario flexible',
        ],
        featured: false,
    },
    {
        name: 'Premium',
        price: '180K',
        period: 'por mes',
        badge: 'Más Popular',
        features: [
            '8 sesiones mensuales',
            'Solución de parciales y quices',
            'Clases en vivo y grabadas',
            'Chat directo con tutor',
            'Material exclusivo',
        ],
        featured: true,
    },
    {
        name: 'Curso Completo',
        price: '350K',
        period: 'por curso',
        features: [
            'Programa completo de materia',
            'Acceso a grabaciones',
            'Talleres prácticos incluidos',
            'Certificado de finalización',
            'Soporte continuo',
        ],
        featured: false,
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' }
    })
}

function Pricing() {
    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-label">Precios</span>
                    <h2 className="section-title">Planes para cada necesidad</h2>
                    <p className="section-subtitle">
                        Elige el plan que mejor se adapte a tus objetivos académicos. Todos incluyen acompañamiento personalizado.
                    </p>
                </motion.div>

                <div className="pricing-grid">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            className={`pricing-card ${plan.featured ? 'featured' : ''}`}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            variants={cardVariants}
                        >
                            {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
                            <div className="pricing-name">{plan.name}</div>
                            <div className="pricing-price">
                                <span className="currency">$</span>
                                {plan.price}
                            </div>
                            <div className="pricing-period">{plan.period}</div>
                            <ul className="pricing-features">
                                {plan.features.map((feat, j) => (
                                    <li key={j} className="pricing-feature">
                                        <FaCheck className="check" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className="btn-primary">Elegir plan</a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing
