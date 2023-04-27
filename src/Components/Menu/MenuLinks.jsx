import { Link } from "react-scroll";
import { toggleMenu } from "../../Helpers/toggleMenu";
import { useNavigate } from "react-router-dom";

export const MenuLinks = () => {
  const navigate = useNavigate();
  const velocity = 800;
  return (
    <div className="menu_links">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={velocity}
        onClick={toggleMenu}
      >
        Home
      </Link>
      <Link
        to="home_lineup"
        spy={true}
        smooth={true}
        offset={-50}
        duration={velocity}
        onClick={toggleMenu}
      >
        Lineup
      </Link>
      <Link
        to="home_entradas"
        spy={true}
        smooth={true}
        offset={0}
        duration={velocity}
        onClick={toggleMenu}
      >
        Entradas
      </Link>
      <Link
        to="home_satelite"
        spy={true}
        smooth={true}
        offset={0}
        duration={velocity}
        onClick={toggleMenu}
      >
        Baum Satélite
      </Link>
      <Link
        to="home_galeria"
        spy={true}
        smooth={true}
        offset={20}
        duration={velocity}
        onClick={toggleMenu}
      >
        Galería
      </Link>
      <Link
        to="home_faqs"
        spy={true}
        smooth={true}
        offset={0}
        duration={velocity}
        onClick={toggleMenu}
      >
        FAQS
      </Link>
      <div
        onClick={() => {
          navigate("/blog");
          toggleMenu();
        }}
      >
        Blog
      </div>
    </div>
  );
};
