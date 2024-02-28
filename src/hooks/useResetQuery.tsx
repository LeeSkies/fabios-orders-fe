import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const useResetQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({});
  }, []);
};
