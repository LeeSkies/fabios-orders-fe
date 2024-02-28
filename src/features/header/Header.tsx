import { useParams } from "react-router-dom";
import { AddOrder } from "./AddOrder";
import { Filter } from "./Filter";
import { Search } from "./Search";

type Props = {};

export const Header = (props: Props) => {
  const { id } = useParams();

  return (
    <header
      className={`flex items-center justify-between ${
        id ? "max-md:hidden" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <Filter />
        <Search />
      </div>
      <AddOrder />
    </header>
  );
};
