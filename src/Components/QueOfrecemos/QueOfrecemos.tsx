import CardOffer from "./CardOffer/CardOffer";
import "./QueOfrecemos.css";

const QueOfrecemos = () => {
  return (
    <div>
      <div id="titleOffer">
        <h1>
          UN SITIO WEB QUE <span id="amaras">AMARAS</span>
        </h1>
      </div>
      <div className="queOfrecemos seccion">
        <CardOffer
          titleO="Diseño Responsivo de Alta Calidad:"
          descriptionO="Nuestros sitios web están diseñados para lucir espectaculares en cualquier dispositivo. Desde smartphones hasta computadoras de escritorio, tu página se verá perfecta en todos ellos."
        />

        <CardOffer
          titleO="Experiencia de Usuario Optimizada:"
          descriptionO="Creamos sitios web que no solo se ven bien, sino que también brindan una experiencia de usuario excepcional. La navegación fluida y la disposición intuitiva mantendrán a tus visitantes comprometidos."
        />
        <CardOffer
          titleO="Carga Rápida y Eficiente:"
          descriptionO="Nadie tiene tiempo para esperar a que una página cargue. Con nuestra tecnología optimizada, garantizamos que tu sitio web cargará de manera rápida y eficiente, manteniendo a tus visitantes involucrados desde el primer momento."
        />
      
        <CardOffer
          titleO="SEO Incorporado:"
          descriptionO="La optimización para motores de búsqueda es crucial para ser encontrado en línea. Integramos técnicas de SEO en cada página que creamos, lo que aumentará tus posibilidades de aparecer en los resultados de búsqueda."
        />
        <CardOffer
          titleO="Integración de Redes Sociales:"
          descriptionO="Conecta tu presencia en línea de manera más efectiva mediante la integración perfecta de tus perfiles de redes sociales en tu sitio web. Esto te permite llegar a un público más amplio y mantener a tus visitantes actualizados."
        />
        <CardOffer
          titleO="Soporte y Mantenimiento Continuo:"
          descriptionO="No te dejamos solo después de lanzar tu sitio web. Ofrecemos un soporte constante y mantenimiento para asegurarnos de que tu página siga funcionando sin problemas y esté al día con las últimas tendencias."
        />
      </div>
    </div>
  );
};

export default QueOfrecemos;
