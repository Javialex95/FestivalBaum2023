import { useFetch } from "../../Hooks/useFetch";
import { HomeContext } from "./HomeContext";

export const HomeProvider = ({ children }) => {
  const { data, isLoading } = useFetch("/pagina-home", {});

  return (
    <HomeContext.Provider value={{ data, isLoading }}>
      {children}
    </HomeContext.Provider>
  );
};
