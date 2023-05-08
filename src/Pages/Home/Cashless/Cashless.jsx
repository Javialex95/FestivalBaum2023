import { Accordion } from "../../../Common/Accordion";

export const Cashless = ({ Cashless }) => {
  return (
    <section className="home_cashless max_width_container">
      <h1>Precarga cashless</h1>

      <p className="paragraph">
        El Cashless es un sistema de pagos electrónicos que será tu única forma de comprar
        productos en los restaurantes, las barras de licores, y el merch oficial del
        Festival, entre otros. Al adquirir tu boleta o entrada para el respectivo evento,
        serás registrado dentro del sistema de Cashless, otorgando a Sueño Stereo un
        mandato para la recepción de tus fondos, y la operación del sistema Cashless, a
        efecto de que el sistema te permite adquirir bienes y servicios ofrecidos por
        terceros, en los respectivos eventos.
      </p>

      <div className="principal_button button_a">
        <a
          target="_black"
          href="https://cashless.entradasamarillas.com/event/baumfestival2023"
        >
          Precarga cashless
        </a>
      </div>
      <Accordion type="cashless" items={Cashless} />
    </section>
  );
};
