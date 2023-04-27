import { useTickets } from "../../../Hooks/useTickets";

export const HomeEntradas = ({
  entradas,
  backstage_precio,
  link_entradas,
  link_entradas_internacional,
  alcancias_descripcion,
  alcancia_link,
}) => {
  const { vip, general } = useTickets(entradas);

  return (
    <section className="home_entradas" id="home_entradas">
      <div className="max_width_container">
        <h1>Entradas</h1>
      </div>
      <div className="max_width_container_2">
        <div className="container_entradas">
          <div className="entradas">
            <div className="entrada backstage">
              <span>Combos Backstage:</span>
              <p>{backstage_precio}</p>
            </div>

            <div className="etapas">
              <div className="entrada vip ">
                <span>Combos VIP:</span>

                {vip.map((etapa, i) => (
                  <div key={`etapa_vip_${i}`} className="etapa">
                    <span>Etapa {etapa.etapa} :</span>
                    <p>{etapa.precio}</p>
                  </div>
                ))}
              </div>

              <div className="entrada general ">
                <span>Combos General:</span>

                {general.map((etapa, i) => (
                  <div key={`etapa_general_${i}`} className="etapa">
                    <span>Etapa {etapa.etapa} :</span>
                    <p>{etapa.precio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

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
