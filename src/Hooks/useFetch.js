import { useState, useEffect } from "react";

export const useFetch = (url, item = null) => {
  const finalUrl = `https://festivalbaum2023.herokuapp.com${url}`;

  const [state, setState] = useState({
    data: item,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(finalUrl);
    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch();
  }, [finalUrl]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
