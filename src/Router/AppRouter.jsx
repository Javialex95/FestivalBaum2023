import { Route, Routes } from "react-router-dom";
import { ArticlePage } from "../Pages/Article/ArticlePage";
import { BlogPage } from "../Pages/Blog/BlogPage";
import { Home } from "../Pages/Home/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/blog" element={<BlogPage />} />
      <Route exact path="/blog/:id" element={<ArticlePage />} />
    </Routes>
  );
};
