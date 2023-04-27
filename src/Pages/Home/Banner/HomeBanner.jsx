export const HomeBanner = ({
  link_entradas,
  link_entradas_internacional,
  artistas_banner,
  logo_banner,
}) => {
  return (
    <section className="home_banner max_width_container">

      <div className="scrollDown">
        <img src="/assets/scroll.png" alt="scroll" />
      </div>
      <div className="info_desktop">
        <div className="logo">
          <img src={logo_banner.url} alt="logo" />
        </div>

        <div className="botones">
          {link_entradas_internacional && (
            <a
              target="_blank"
              className="button_a principal_button ga4-call_to_action-entradas ga4-call_to_action-entradas_internacionales"
              href={link_entradas_internacional}
            >
              Entradas internacionales
            </a>
          )}

          {link_entradas && (
            <a
              className="button_a tertiary_button ga4-call_to_action-entradas ga4-call_to_action-entradas_banner"
              target="_blank"
              href={link_entradas}
            >
              Entradas
            </a>
          )}
        </div>
      </div>

      <div className="artistas">
        <p>{artistas_banner}</p>
      </div>
    </section>
  );
};
