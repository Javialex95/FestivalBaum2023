import { useFilterArtists } from "../../../Hooks/useFilterArtists";
import { SliderArtists } from "./SliderArtists";
import { SliderArtistsDesktop } from "./SliderArtistsDesktop";
import artistas from "./lineup.json";

export const HomeLineup = ({lineup}) => {

  const { artistsDayOne, artistsDayTwo } = useFilterArtists(lineup);

  return (
    <section className="home_lineup max_width_container">
      <h1>
        Lineup
        <span>Toca el nombre del artista para ver más información</span>
      </h1>

      {window.innerWidth < 999 ? (
        <>
          <SliderArtists
            items={artistsDayOne}
            slideName="slides_dayOne"
            day="1"
          />
          <SliderArtists
            items={artistsDayTwo}
            slideName="slides_dayTwo"
            day="2"
          />
        </>
      ) : (
        <>
          <SliderArtistsDesktop
            items={artistsDayOne}
            slideName="slides_dayOne"
            day="1"
          />
          <SliderArtistsDesktop
            items={artistsDayTwo}
            slideName="slides_dayTwo"
            day="2"
          />
        </>
      )}
    </section>
  );
};
