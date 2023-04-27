import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../Common/Loader";
import { Slider } from "../../Common/Slider";
import { BlogContext } from "../../context/BlogContext/BlogContext";
import { useFindArticle } from "../../Hooks/useFindArticle";
import { ArticleDescription } from "./ArticleDescription";

export const ArticlePage = () => {
  const navigate = useNavigate();

  const { data: entradasItems, isLoading } = useContext(BlogContext);
  const { id } = useParams();
  const { state } = useFindArticle(id, entradasItems);
  return (
    <section className="articlePage">
      <Loader loading={isLoading} />

      {/* Header css */}
      <div className="header_2_arrow" onClick={() => navigate("/blog")}>
        <img src="/assets/iconos/flechas/izquierda.png" alt="icono" />
      </div>

      {!isLoading && (
        <div
          className={
            isLoading ? "principal_content" : "principal_content show_principal"
          }
        >
          {Object.keys(state).length > 0 && (
            <div className="max_width_container">
              <div className="block_section">
                <div className="item">
                  <p className="subtitle">Blog</p>
                  <h2>{state.titulo}</h2>

                  <ArticleDescription description={state.descripcion} />
                </div>
                <div className="imagen">
                  <img src={state.imagen_principal.url} alt="imagen" />
                </div>
              </div>
              <div className="gallery gallery_2">
                {state.galeria_1 && (
                  <Slider imagenes={state.galeria_1} velocity={12000} />
                )}
              </div>

              <div className="block_section">
                {state.url_video && (
                  <div className="video">
                    <iframe
                      className="iframe ga4-call_to_action-reproduccion"
                      srcDoc={`
                  <style>
                      img{object-fit:cover}
                      *{padding:0;margin:0;overflow:hidden}
                      html,body{height:100%;}
                      .img1{position:absolute;width:100vw;height:100%;top:0;bottom:0;margin:auto}
                      .img2{position:absolute;width:50px;top:0;bottom:0;margin:auto; left:0;right: 0;}
                      span{position:absolute;width:100vw;height:100%;top:0;bottom:0;margin:auto}
                      span{height:1.5em;text-align:center;font:120px/1.5 sans-serif;color:#FF4D00;text-shadow:0 0 0.5em black}
                  </style>
                  <a href=${state.url_video}> 
                      <img loading="lazy" class = "img1" src=${state.portada_video.url}>
                      <img loading="lazy" class = "img2"  src="/assets/play.png" />
                
                  </a>
                    `}
                      src={`${state.url_video}`}
                      title="YouTube video player"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      muted
                      autoPlay
                    ></iframe>
                  </div>
                )}

                <div className="item">
                  <ArticleDescription description={state.descripcion_video} />
                </div>
              </div>
              <div className="gallery">
                {state.galeria_2 && (
                  <Slider imagenes={state.galeria_2} velocity={13000} />
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
