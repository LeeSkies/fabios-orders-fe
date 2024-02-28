import { HiChevronDown, HiOutlineFunnel } from "react-icons/hi2";

type Props = {};

export const Filter = (props: Props) => {
  return (
    <div className="max-md:hidden flex items-center gap-3 border rounded w-18 duration-1000 h-9 pr-2">
      <span className="flex items-center gap-1">
        <HiOutlineFunnel />
        סינון
      </span>
      <button className="border-r p-2 btn">
        <HiChevronDown className="text-lg" />
      </button>
    </div>
  );
};
