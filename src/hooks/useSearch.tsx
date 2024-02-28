import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const useSearch = (onClear: Function, cb?: Function) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q");
  const loading = searchParams.get("loading");

  const searchQuery = useQuery({
    queryKey: ["search"],
    queryFn: async () => {
      if (!query || query === "") return null;
      const { data } = await axios.get(
        "http://localhost:3000/orders/search/" + query
      );
      searchParams.set("loading", "false");
      setSearchParams(searchParams);
      if (cb) cb(data);
      return data;
    },
  });

  useEffect(() => {
    if (query == undefined) return;
    else if (query == "") {
      onClear();
    }
    searchQuery.refetch();
  }, [query]);

  return query;
};
