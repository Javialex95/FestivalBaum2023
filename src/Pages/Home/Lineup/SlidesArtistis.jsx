import { Slide } from "./Slide";

export const SlidesArtistis = ({ slideName, items, toggleSlides }) => {
  return (
    <div className={`slides slides_${slideName}`}>
      {items.map((item, i) => (
        <Slide
          key={`item_artist_${i}`}
          item={item}
          slideName={slideName}
          toggleSlides={toggleSlides}
        />
      ))}

      <div className="botones">
        <div
          className={`prev prev_${slideName} ga4-call_to_action-artista-slider_cambio`}
        >
          <img
            className="boton "
            src="/assets/iconos/flechas/izquierda.png"
            alt="icono"
          />
          <img
            className="boton boton_hover"
            src="/assets/iconos/flechas/izquierda_hover.png"
            alt="icono"
          />
        </div>
        <div
          className={`next next_${slideName} ga4-call_to_action-artista-slider_cambio`}
        >
          <img
            src="/assets/iconos/flechas/derecha.png"
            className="boton"
            alt="icono"
          />
          <img
            className="boton boton_hover"
            src="/assets/iconos/flechas/derecha_hover.png"
            alt="icono"
          />
        </div>
      </div>
    </div>
  );
};
