import { Slider } from "../../../Common/Slider";

export const HomeGaleria = ({ galeria_1, galeria_2 }) => {
  return (
    <section className="home_galeria">
      <Slider imagenes={galeria_1} velocity={10000} />
      <h1>Galería</h1>
      <Slider imagenes={galeria_2} velocity={12000} />
    </section>
  );
};
