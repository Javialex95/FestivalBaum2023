import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext/BlogContext";
import { useCreateUrls } from "../../Hooks/useCreateUrls";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../Common/Loader";

export const BlogPage = () => {
  const navigate = useNavigate();
  const { data: entradasIemts, isLoading } = useContext(BlogContext);

  const { state: entradas } = useCreateUrls(entradasIemts);

  return (
    <section className="blogPage">
      <Loader loading={isLoading} />

      {/* Header css */}
      <div className="header_2_arrow" onClick={() => navigate("/")}>
        <img src="/assets/iconos/flechas/izquierda.png" alt="icono" />
      </div>

      {!isLoading && (
        <div
          className={
            isLoading ? "principal_content" : "principal_content show_principal"
          }
        >
          <div className="max_width_container">
            <h1>Blog</h1>
            <p className="description">
            Conoce todas la novedades, historias y anécdotas del rave más grande de Colombia
            </p>

            <div className="blogPage_list">
              {entradas.map((entrada) => (
                <div
                  onClick={() => navigate(`/blog/${entrada.linkRef}`)}
                  className="boton"
                >
                  {entrada.titulo}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
