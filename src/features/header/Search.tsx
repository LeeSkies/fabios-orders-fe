import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { HiAdjustmentsHorizontal, HiMagnifyingGlass } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { Loader } from "../common/Loader";

type Props = {};

export const Search = (props: Props) => {
  const [query, setQuery] = useState("");

  const [queryParams, setQueryParams] = useSearchParams();

  const isLoading = queryParams.get("loading") === "true";

  const updateSearchQuery = () =>
    setQueryParams({ q: query, loading: query ? "true" : "false" });

  const handleChange = (value: string) => {
    setQuery(value);
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key == "Enter") {
      updateSearchQuery();
    }
  };

  useEffect(() => {
    if (query === "" && queryParams.get("loading") != undefined)
      updateSearchQuery();
  }, [query]);

  return (
    <div className="bar flex items-center border border-slate-200 rounded w-fit h-9 px-2 gap-2">
      <button className="btn" onClick={updateSearchQuery}>
        <HiMagnifyingGlass />
      </button>
      <input
        onKeyDown={(e) => handleKeyDown(e)}
        type="text"
        defaultValue={query}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="טקסט חופשי..."
        className="focus:outline-none"
      />
      {isLoading ? (
        <Loader size={"16px"} />
      ) : (
        <HiAdjustmentsHorizontal className="text-lg" />
      )}
    </div>
  );
};
