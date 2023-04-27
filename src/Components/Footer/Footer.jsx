import { FooterSocial } from "./FooterSocial";
import { Link } from "react-scroll";
import { HomeContext } from "../../context/HomeContext/HomeContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const { data: dataHome, isLoading } = useContext(HomeContext);
  const location = useLocation();

  return (
    <section
      className={location.pathname === "/" ? "footer " : "footer footer_black"}
    >
      <div className="max_width_container">
        <div className="scrollTop">
          {location.pathname === "/" && (
            <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
              <div className="arrow_container">
                <img
                  className="arrow"
                  src="/assets/iconos/flechas/arriba.png"
                  alt="top"
                />
                <img
                  className="arrow arrow_hover"
                  src="/assets/iconos/flechas/arriba_hover.png"
                  alt="top"
                />
              </div>
              <p>Volver arriba</p>
            </Link>
          )}
        </div>

        {!isLoading && (
          <div className="footer_logos">
            {window.innerWidth > 999 ? (
              <img
                src={dataHome.footer_logos_desktop.url}
                alt="patrocinadores"
              />
            ) : (
              <img src={dataHome.footer_logos_movil.url} alt="patrocinadores" />
            )}
          </div>
        )}

        <FooterSocial />

        <div className="politics">
          <a
            target="_blank"
            href="https://www.baumfestival.com/assets/politicas.pdf"
          >
            Politicas de privacidad
          </a>
          <p>Información y PQRS: info@paramopresenta.com</p>
        </div>

        <div className="bottom">
          <p>Baum Festival 2023 ® </p>
        </div>
      </div>
    </section>
  );
};
