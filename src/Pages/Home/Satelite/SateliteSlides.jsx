export const SateliteSlides = ({ satelites, number }) => {
  return (
    <div className="relative">
      {/* SLides */}
      {satelites.map((item) => (
        <div className="satelite_slide">
          <img src={item.imagen.url} alt="" />

          <div className="max_width_container">
            <div className="info_top">
              <div>
                <h3>{item.ciudad}</h3>
                <h4>{item.venue}</h4>
              </div>
              <div>{item.fecha}</div>
            </div>

            <h2>
              {item.titulo}
              {item.link_entradas && (
                <a
                  className="button_a principal_button"
                  target="_blank"
                  href={item.link_entradas}
                >
                  Entradas
                </a>
              )}
            </h2>
          </div>
        </div>
      ))}

      {/* Botones */}
      <div className="botones">
        <div className={`prev prev_satelite_slide`}>
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
        <p>
          {number} <span>de</span> {satelites.length}
        </p>
        <div className={`next next_satelite_slide `}>
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
