import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppButton.css'

function WhatsAppButton() {
    const phoneNumber = '573176968040'
    const message = encodeURIComponent('Hola MAPI! Me gustaría obtener más información sobre sus servicios de tutorías académicas.')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp />
            <span className="whatsapp-tooltip">¡Escríbenos!</span>
        </a>
    )
}

export default WhatsAppButton
