import { useSlider } from "../../../Hooks/useSlider";
import { SlidesArtistis } from "./SlidesArtistis";
import { Link } from "react-scroll";

export const SliderArtists = ({ items, slideName, day }) => {
  const { setCurrentSlideSlider, toggleSlides } = useSlider(items, slideName);
  return (
    <div className={`slider slider_${slideName}`}>
      <div className="container">
        <h3>
          {day === "1" ? <>20 de mayo del 2023</> : <>21 de mayo del 2023</>}
        </h3>

        <div className={`dots dots_${slideName}`}>
          {items.map((item, i) => (
            <div key={`dot_${i}`} className={`dot dot_${slideName} ga4-call_to_action-artista`}>
              <Link
                to={`slider_${slideName}`}
                spy={true}
                smooth={true}
                offset={-50}
                duration={600}
                onClick={() => {
                  setCurrentSlideSlider(i + 1);
                  toggleSlides(`slider_${slideName}`);
                }}
              >
                <p>{item.artista.Nombre}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <SlidesArtistis
        slideName={slideName}
        items={items}
        toggleSlides={toggleSlides}
      />
    </div>
  );
};
