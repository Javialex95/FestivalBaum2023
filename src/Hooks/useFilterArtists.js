import { useEffect, useState } from "react";

export const useFilterArtists = (artists) => {
  const [artistsDayOne, setArtistsDayOne] = useState([]);
  const [artistsDayTwo, setArtistsDayTwo] = useState([]);

  useEffect(() => {
    const dayOne = artists.filter((artist) => artist.artista.dia === 'Sábado 20 de mayo');
    const dayTwo = artists.filter((artist) => artist.artista.dia === 'Domingo 21 de mayo');
    setArtistsDayOne(dayOne);
    setArtistsDayTwo(dayTwo);
  }, [artists]);

  return {
    artistsDayOne,
    artistsDayTwo,
  };
};
