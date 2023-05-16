import PriceTables from "../../../Common/PriceTables";

export const HomeEntradas = ({
  entradas,
  backstage_precio_individual,
  entradas_individual,
  backstage_precio,
  link_entradas,
  link_entradas_internacional,
  alcancias_descripcion,
  alcancia_link,
}) => {
  return (
    <section className="home_entradas" id="home_entradas">
      <div className="max_width_container">
        <h1>Entradas</h1>
      </div>
      <div className="max_width_container_2">
        <div className="container_entradas">
          <h3 className="title_two">Individuales por días</h3>
          <PriceTables
            backstage_precio={backstage_precio_individual}
            entradas={entradas_individual}
            title="Backstage:"
            title_vip="VIP:"
            title_general="General:"
          />
          <h3 className="title_two">Combos</h3>
          <PriceTables
            backstage_precio={backstage_precio}
            entradas={entradas}
            title="Combos Backstage:"
            title_vip="Combos VIP:"
            title_general="Combos General:"
          />

          <div className="button">
            <div className="buttons">
              {link_entradas_internacional && (
                <a
                  target="_blank"
                  className="button_a principal_button ga4-call_to_action-entradas ga4-call_to_action-entradas_seccion"
                  href={link_entradas_internacional}
                >
                  Entradas aquí
                </a>
              )}

              {link_entradas && (
                <a
                  className="tertiary_button ga4-call_to_action-entradas ga4-call_to_action-entradas_internacionales_seccion"
                  target="_blank"
                  href={link_entradas}
                >
                  Entradas internacionales aquí
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="container_alcancias">
          <h2>Alcancías</h2>
          <p>{alcancias_descripcion}</p>

          {alcancia_link && (
            <a
              target="_blank"
              className="button_a principal_button ga4-call_to_action-alcancias"
              href={alcancia_link}
            >
              Ir a alcancías
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
