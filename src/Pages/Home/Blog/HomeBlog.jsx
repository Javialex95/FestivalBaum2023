import { HomeBlogItems } from "./HomeBlogItems";
import { useNavigate } from "react-router-dom";

export const HomeBlog = ({ blog_descripcion, blog_destacados }) => {
  const navigate = useNavigate();

  return (
    <section className="home_blog ">
      
      <div className="max_width_container">
        <h1>BLOG</h1>

        <p className="description">{blog_descripcion}</p>

        <HomeBlogItems entradas={blog_destacados} navigate={navigate} />

        {window.innerWidth < 999 && (
          <>
            <div
              onClick={() => navigate(`/blog`)}
              className="button_a principal_button"
            >
              Ver todos
            </div>

            <img
              className="home_blog_imagen"
              src="/assets/galeria/3.png"
              alt="imagen"
            />
          </>
        )}
      </div>
    </section>
  );
};
