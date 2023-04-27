import { useEffect } from "react";

export const HomeGaleria = () => {
  useEffect(() => {
    let array = [".home_galeria"];

    window.onscroll = function () {
      let windowWidth = window.innerWidth;
      let scrollTop = window.pageYOffset;

      array.forEach((el) => {
        let wrap = document.querySelector(el);
        let elWrap = wrap.querySelector(".element-wrapper");
        let sticky_wrapper = wrap.querySelector(".horizontal-section");

        let horLength = elWrap.scrollWidth;
        let distFromTop = wrap.offsetTop;
        let scrollDistance = distFromTop + horLength - windowWidth;

        wrap.style.height = horLength + "px";


        if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
          sticky_wrapper.style.position = "fixed";
          elWrap.style.transform =
            "translateX(-" + (scrollTop - distFromTop) + "px)";
        } else {
          sticky_wrapper.style.position = "absolute";
          sticky_wrapper.style.bottom = 0;
        }
      });
    };
  }, []);
  return (
    <div className="home_galeria_QUITARESTO">
      <div class="horizontal-section">
        <div class="sticky-wrapper">
          <div class="element-wrapper">
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element">
              <h2>ULTIMO</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
