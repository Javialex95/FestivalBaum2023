import { useSlider } from "../../../Hooks/useSlider";
import { SateliteSlides } from "./SateliteSlides";
import { Link } from "react-scroll";

export const HomeSatelite = ({ satelites }) => {
  const { number, setCurrentSlideSlider, toggleSlides } = useSlider(
    satelites,
    "satelite_slide"
  );
  return (
    <main className="home_satelite ">
      <div className="max_width_container">
        <div className="intro">
          <h1>Baum Satélite</h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p> */}
        </div>
        {/* Dots */}
        <div className="flex">
          <div className="dots_satelite">
            {satelites.map((item, i) => (
              <div className="dot_satelite_slide dot_item">
                <img src="/assets/iconos/1_right_arrow.png" alt="arrow" />

                <Link to="relative" smooth={true} duration={500} offset={-200}>
                  <p onClick={() => setCurrentSlideSlider(i + 1)}>
                    {item.titulo}
                  </p>
                </Link>
              </div>
            ))}
          </div>

          {/* Slides Desktop */}
          {window.innerWidth > 999 && (
            <SateliteSlides satelites={satelites} number={number} />
          )}
        </div>
      </div>
      {/* Slides Movil */}
      {window.innerWidth < 999 && (
        <SateliteSlides satelites={satelites} number={number} />
      )}
    </main>
  );
};
