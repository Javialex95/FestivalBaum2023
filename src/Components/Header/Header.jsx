import { useEffect } from "react";
import { toggleMenu } from "../../Helpers/toggleMenu";

export const Header = () => {
  useEffect(() => {
    var navbar = document.querySelector(".logo");
    var entradas = document.querySelector(".entradas");
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        entradas.classList.add("sticky");
      } else {
        entradas.classList.remove("sticky");
      }
    }
    window.onscroll = function () {
      myFunction();
    };
  }, []);

  return (
    <div className="header max_width_container">
      
      <div className="entradas">
        <a
          className="button_a principal_button ga4-call_to_action-entradas ga4-call_to_action-entradas-sticky_header"
          target="_blank"
          href="https://www.entradasamarillas.com/event/baum-festival-2023"
        >
          Entradas
        </a>
      </div>
      <div onClick={toggleMenu} className="burger ga4-call_to_action-hamburgesa">
        <img src="/assets/iconos/menu.png" alt="burger" />
        <img
          className="burger_hover"
          src="/assets/iconos/menu_hover.png"
          alt="burger"
        />
      </div>
    </div>
  );
};
