import { useEffect, useState } from "react";

export const useTickets = (items) => {
  const [vip, setVip] = useState([]);
  const [general, setGeneral] = useState([]);

  useEffect(() => {
    if (items.length > 0) {
      const vipTickets = items.filter((item) => item.combo === "vip");
      const generalTickets = items.filter((item) => item.combo === "general");
      setVip(vipTickets);
      setGeneral(generalTickets);
    }
  }, [items]);

  return {
    vip,
    general,
  };
};
