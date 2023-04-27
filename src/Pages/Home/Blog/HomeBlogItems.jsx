import { useCreateUrls } from "../../../Hooks/useCreateUrls";

export const HomeBlogItems = ({ entradas, navigate }) => {
  const { state } = useCreateUrls(entradas);

  const openItem = (itemsToClose, itemSelected) => {
    const items = document.querySelectorAll(`.${itemsToClose}`);
    const item = document.querySelector(`.${itemSelected}`);

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("active");
    }

    item.classList.add("active");
  };

  return (
    <div className="home_blog_items">
      {state.map((entrada, i) => (
        <div
          className={i > 0 ? `item_blog item_${i + 1}` : `item_blog item_${i + 1} active`}
          key={entrada.entrada.linkRef}
        >
          <p
            onClick={() => openItem("item_blog", `item_${i + 1}`)}
            className="link title_primary"
          >
            {entrada.entrada.titulo}
          </p>
          <p className="info">
            {entrada.entrada.shortDesc}...
            <p>
              <div
                onClick={() => navigate(`/blog/${entrada.entrada.linkRef}`)}
                className="tertiary_button"
              >
                Leer artículo
              </div>
            </p>
          </p>
        </div>
      ))}

      {/* rest of items */}
      <div className="items">
        <div className="links">
          {window.innerWidth > 999 && (
            <div
              onClick={() => navigate(`/blog/`)}
              className="button_a principal_button"
            >
              Ver todos
            </div>
          )}
        </div>

        {window.innerWidth > 999 && (
          <div className="imagen">
            <img
              className="home_blog_imagen"
              src="/assets/galeria/3.png"
              alt="imagen"
            />
          </div>
        )}
      </div>
    </div>
  );
};
