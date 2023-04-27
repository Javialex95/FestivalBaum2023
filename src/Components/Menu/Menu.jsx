import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toggleMenu } from "../../Helpers/toggleMenu";
import { MenuLinks } from "./MenuLinks";
import { MenuLinksTwo } from "./MenuLinksTwo";

export const Menu = () => {
  const location = useLocation();

  const [scrollTo, setScrollTo] = useState("home");

  useEffect(() => {
    function scrollElement(elementTo) {
      const element = document.querySelector(`.${elementTo}`);
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView();
      }
    }
    scrollElement(scrollTo);
  }, [scrollTo]);

  return (
    <section className="menu">
      <div onClick={toggleMenu} className="close">
        <img src="/assets/iconos/equis/x_negra.png" alt="x_negra" />
      </div>
      <div className="menu_background">
        <video
          muted
          playsInline
          autoPlay
          loop
          poster={`/assets/fondo/mancha_fondo_menu.mp4`}
        >
          <source
            src={`/assets/fondo/mancha_fondo_menu.mp4`}
            type="video/mp4"
          />
        </video>

        <img className="logo" src="/assets/logo.png" alt="logo" />
      </div>

      {location.pathname === "/" ? (
        <MenuLinks />
      ) : (
        <MenuLinksTwo setScrollTo={setScrollTo} />
      )}
    </section>
  );
};
