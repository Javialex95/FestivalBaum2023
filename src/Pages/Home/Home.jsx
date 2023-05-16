import { useContext } from "react";
import { Loader } from "../../Common/Loader";
import { HomeContext } from "../../context/HomeContext/HomeContext";
import { HomeBlog } from "./Blog/HomeBlog";
import { HomeBanner, HomeLineup, HomeFaqs, HomeGaleria, HomeEntradas } from "./index";
import { HomeSatelite } from "./Satelite/Satelite";
import { Cashless } from "./Cashless/Cashless";

export const Home = () => {
  const { data: dataHome, isLoading } = useContext(HomeContext);
  // FALTA LINEUP

  console.log(dataHome);

  return (
    <section className="home">
      <Loader loading={isLoading} />

      {!isLoading && (
        <div
          className={isLoading ? "principal_content" : "principal_content show_principal"}
        >
          <HomeBanner {...dataHome} />
          <HomeLineup {...dataHome} />
          <HomeEntradas {...dataHome} />
          <HomeSatelite {...dataHome} />
          <HomeGaleria {...dataHome} />
          <HomeBlog {...dataHome} />
          <Cashless {...dataHome} />
          <HomeFaqs {...dataHome} />
        </div>
      )}
    </section>
  );
};
