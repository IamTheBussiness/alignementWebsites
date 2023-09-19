// import "./QuienesSomos.css";
// import WorkButton from "../WorkButton/WorkButton";
// import { useState } from "react";

// export const QuienesSomos = () => {
//   const [isAnimationActive, setIsAnimationActive] = useState(false);

//   const activateAnimation = () => {
//     setIsAnimationActive(true);
//   };

//   return (
//     <div id="div-QuienesSomos" className="seccion">
//       <div className="roll-in-left" id="img-QuienesSomos"></div>
//       <div id="div-QuienesSomosContent">
//         <div id="title-QuienesSomos">
//           <h2>Sobre nosotros</h2>
//         </div>
//         <div id="text-QuienesSomos">
//           <h3>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text
//             ever since the 1500s, when an unknown printer took a galley of type
//             and scrambled it to make a type specimen book. Lorem Ipsum has been
//             the industry's standard dummy text ever since the 1500s, when an
//             unknown printer took a galley of type and scrambled it to make a
//             type specimen book.
//           </h3>
//         </div>
//         <div id="workButton-QuienesSomos">
//           <WorkButton text={"Trabaja con nosotros"} />
//         </div>
//       </div>
//     </div>
//   );
// };

// codigo con animacion

import React, { useState } from "react";
import "./QuienesSomos.css";
import WorkButton from "../WorkButton/WorkButton";

export const QuienesSomos = () => {
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  const handleScroll = () => {
    const quienesSomosElement = document.getElementById("div-QuienesSomos");
    const scrollTop = window.scrollY;
    const elementOffset = quienesSomosElement.offsetTop;
    const windowHeight = window.innerHeight;

    if (scrollTop > elementOffset - windowHeight && !isAnimationActive) {
      setIsAnimationActive(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="div-QuienesSomos"
      className={`seccion ${isAnimationActive ? "puff-in-hor" : ""}`}
    >
      <div id="img-QuienesSomos"></div>
      <div id="div-QuienesSomosContent">
        <div id="title-QuienesSomos">
          <h2>Sobre nosotros</h2>
        </div>
        <div id="text-QuienesSomos">
          <h3>
            Con una sólida trayectoria de más de 7 años en el mundo del diseño y
            desarrollo web, nuestro equipo se enorgullece de crear soluciones
            digitales excepcionales, estando siempre a la vanguardia de las
            tendencias y tecnologías emergentes. Comprendemos la importancia de
            una presencia en línea efectiva en la era digital actual y estamos
            aquí para fusionar la creatividad con la experiencia técnica,
            ofreciendo resultados sobresalientes y un enfoque personalizado para
            cada proyecto.
          </h3>
          <h3>
            Te invitamos a unirte a nosotros y expandir tu negocio en línea con
            soluciones digitales excepcionales.
          </h3>
        </div>
        <div id="workButton-QuienesSomos">
          <WorkButton text={"Trabaja con nosotros"} />
        </div>
      </div>
    </div>
  );
};
