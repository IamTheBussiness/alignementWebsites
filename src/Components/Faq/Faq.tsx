import "./faq.css";

import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <div className="contentAcordeon">
      <div className="Acordeon">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Qué beneficios tiene tener una página web?
            </Accordion.Header>
            <Accordion.Body>
              Tener una página web ofrece una presencia en línea las 24 horas
              del día, los 7 días de la semana. Te ayuda a llegar a un público
              más amplio, mejorar tu visibilidad y proporcionar información
              sobre tus productos o servicios. Tú pagina web es tu presencia
              digital.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Cuál es la duración del hosting y qué incluye?
            </Accordion.Header>
            <Accordion.Body>
              El hosting es anual, y el primer año está cubierto en el costo
              total. Incluye el alojamiento de tu página web en nuestros
              servidores para que esté disponible en Internet.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Por qué debería elegir vuestros servicios en lugar de otros?
            </Accordion.Header>
            <Accordion.Body>
              Nuestros servicios se destacan porque no utilizamos plantillas
              predefinidas. Creamos diseños personalizados que se ajustan a las
              necesidades y la identidad de tu negocio, lo que te permite
              destacarte en línea, tener una web escalable y robusta a medida
              que tu negocio crezca.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Qué métodos de pago aceptan?</Accordion.Header>
            <Accordion.Body>
              Aceptamos transferencia bancaria y pagos en efectivo. Estamos
              comprometidos a brindarte opciones de pago seguras y convenientes.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Ofrecen facturación para empresas?
            </Accordion.Header>
            <Accordion.Body>
              Sí, proporcionamos facturas para empresas. Nos aseguramos de
              cumplir con todos los requisitos de facturación y proporcionarte
              los detalles necesarios para tus registros.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              Cómo puedo ponerme en contacto con ustedes para obtener más
              información?
            </Accordion.Header>
            <Accordion.Body>
              Puedes ponerte en contacto con nosotros a través de nuestro
              formulario de contacto en la página web, por correo electrónico o
              por teléfono. Estamos aquí para responder a tus preguntas y
              ayudarte en el proceso de obtener tu página web.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
