import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const request = async (...args) => {
    setIsLoading(true);
    const response = await apiFunc(...args);
    setIsLoading(false);

    if (!response.ok) return setHasError(true);

    setHasError(false);
    setData(response.data);
  };
  return { request, data, hasError, isLoading };
};
