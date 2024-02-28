import { HiChevronUpDown } from "react-icons/hi2";
import { Order } from "../../types/order";

type Props = {
  orders: Order[];
  setOrders: Function;
};

export const ListHeaders = ({ orders, setOrders }: Props) => {
  const sortBy = (param: string) => {
    let newOrders: Order[] = [];
    switch (param) {
      case "date": {
        newOrders = orders.sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1));
        break;
      }
      case "branch": {
        newOrders = orders.sort((a, b) => (a.branch < b.branch ? -1 : 1));
        break;
      }
      case "status": {
        newOrders = orders.sort((a, b) => (a.status < b.status ? -1 : 1));
        break;
      }
      case "cost": {
        newOrders = orders.sort((a, b) => (a.cost < b.cost ? -1 : 1));
        break;
      }
      default: {
        return;
      }
    }
    setOrders([...newOrders]);
  };

  return (
    <thead className="border-b-8 hidden md:block border-transparent">
      <tr className="bg-slate-100 p-2 grid grid-cols-5 rounded-xl">
        <th className="flex items-center gap-4 pr-[2px]">
          <input type="checkbox" className="h-4 w-4" />
          <span>הזמנה</span>
        </th>
        <th>
          <button
            className="flex items-center gap-1"
            onClick={() => sortBy("date")}
          >
            <span>תאריך</span>
            <HiChevronUpDown />
          </button>
        </th>
        <th>
          <button
            className="flex items-center gap-1"
            onClick={() => sortBy("branch")}
          >
            <span>סניף</span>
            <HiChevronUpDown />
          </button>
        </th>
        <th>
          <button
            className="flex items-center gap-1"
            onClick={() => sortBy("status")}
          >
            <span>סטטוס</span>
            <HiChevronUpDown />
          </button>
        </th>
        <th>
          <button
            className="flex items-center gap-1"
            onClick={() => sortBy("cost")}
          >
            <span>מחיר</span>
            <HiChevronUpDown />
          </button>
        </th>
      </tr>
    </thead>
  );
};
