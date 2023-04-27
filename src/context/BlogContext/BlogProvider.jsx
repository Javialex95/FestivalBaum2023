import { useFetch } from "../../Hooks/useFetch";
import { BlogContext } from "./BlogContext";

export const BlogProvider = ({ children }) => {
  const { data, isLoading } = useFetch("/blogs", {});

  return (
    <BlogContext.Provider value={{ data, isLoading }}>
      {children}
    </BlogContext.Provider>
  );
};
