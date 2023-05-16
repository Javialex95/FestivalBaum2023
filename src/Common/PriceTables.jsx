import React from "react";
import { useTickets } from "../Hooks/useTickets";
const PriceTables = ({ entradas, backstage_precio, title, title_vip, title_general }) => {
  {
    const { vip, general } = useTickets(entradas);

    return (
      <div className="entradas">
        <div className="entrada backstage">
          <span>{title}</span>
          <p>{backstage_precio}</p>
        </div>

        <div className="etapas">
          <div className="entrada vip ">
            <span>{title_vip}</span>

            {vip.map((etapa, i) => (
              <div key={`etapa_vip_${i}`} className="etapa">
                <span>Etapa {etapa.etapa} :</span>
                <p>{etapa.precio}</p>
              </div>
            ))}
          </div>

          <div className="entrada general ">
            <span>{title_general}</span>

            {general.map((etapa, i) => (
              <div key={`etapa_general_${i}`} className="etapa">
                <span>Etapa {etapa.etapa} :</span>
                <p>{etapa.precio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default PriceTables;
