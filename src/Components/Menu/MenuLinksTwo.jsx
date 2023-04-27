import { Link } from "react-scroll";
import { toggleMenu } from "../../Helpers/toggleMenu";
import { useNavigate } from "react-router-dom";

export const MenuLinksTwo = ({ setScrollTo }) => {
  const navigate = useNavigate();

  return (
    <div className="menu_links">
      <div
        onClick={() => {
          navigate("/");
          toggleMenu();
        }}
      >
        Home
      </div>
      <Link
        onClick={() => {
          navigate("/");
          toggleMenu();
          setScrollTo("home_lineup");
        }}
      >
        Lineup
      </Link>
      <Link
        onClick={() => {
          navigate("/");
          toggleMenu();
          setScrollTo("home_entradas");
        }}
      >
        Entradas
      </Link>
      <Link
        onClick={() => {
          navigate("/");
          toggleMenu();
          setScrollTo("home_galeria");
        }}
      >
        Galería
      </Link>
      <Link
        onClick={() => {
          navigate("/");
          toggleMenu();
          setScrollTo("home_faqs");
        }}
      >
        FAQS
      </Link>
      <div
        onClick={() => {
          navigate("/blog");
          toggleMenu();
          setScrollTo("home_entradas");
        }}
      >
        Blog
      </div>
    </div>
  );
};
