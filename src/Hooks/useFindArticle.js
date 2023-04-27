import { useEffect, useState } from "react";

export const useFindArticle = (item, items, stateInitial = []) => {
  const [state, setState] = useState(stateInitial);

  useEffect(() => {
    const namesplit = item.split("-").join(" ").toLowerCase();

    if (items.length > 0) {
      // Filtrar los no undefined
      const article_found = items.filter(
        (el) => el.titulo.toLowerCase() === namesplit
      );

      const article = article_found.filter((el) =>
        el.titulo
          .toLowerCase()
          .split(" ")
          .join(" ")
          .toLowerCase()
          .includes(namesplit.toLowerCase())
      );

      if (article[0]) {
        setState(article[0]);
      }
    }
  }, [items, item]);

  return {
    state,
    setState,
  };
};
