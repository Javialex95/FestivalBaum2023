import { useEffect, useState } from "react";

export const useCreateUrls = (items) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    if (items.length > 0) {
      const newItems = items.map((item) => {
        let namesplit;
        let shortDesc;
        if (item.titulo) {
          namesplit = item.titulo.split(" ").join("-").toLowerCase();
        }
        // short description
        if (item.descripcion) {
          shortDesc = item.descripcion.slice(0, 150);
        }

        if (item.entrada) {
          item.entrada.linkRef = item.entrada.titulo
            .split(" ")
            .join("-")
            .toLowerCase();
          item.entrada.shortDesc = item.entrada.descripcion.slice(0, 150);
        }


        return {
          ...item,
          linkRef: namesplit,
          shortDesc: shortDesc,
        };
      });

      setState(newItems);
    }
  }, [items]);

  return {
    state,
  };
};
