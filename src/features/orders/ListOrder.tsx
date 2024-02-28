import { BiShekel } from "react-icons/bi";
import { HiChevronLeft } from "react-icons/hi2";
import { Status } from "./Status";
import { Order } from "../../types/order";
import { useEffect, useState } from "react";

type Props = {
  order: Order;
  windowSize: number;
};

export const ListOrder = ({ order, windowSize }: Props) => {
  return windowSize > 768 ? (
    <>
      <td className="flex items-center gap-4">
        <input type="checkbox" className="h-4 w-4" />
        <div className="text-ellipsis overflow-hidden whitespace-nowrap">
          <h3 className="font-bold text-ellipsis overflow-hidden whitespace-nowrap">
            {order.customer}
          </h3>
          <p className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
            {order._id}
          </p>
        </div>
      </td>
      <td className="flex items-center">{order.createdAt.substring(0, 10)}</td>
      <td className="flex items-center">{order.branch}</td>
      <td className="flex items-center">
        <Status status={order.status} />
      </td>
      <td className="flex items-center gap-1">
        {order.cost}
        <BiShekel />
      </td>
      <td className="absolute h-full left-8 text-xl flex items-center">
        <HiChevronLeft />
      </td>
    </>
  ) : (
    <>
      <td>
        <input type="checkbox" className="w-4 h-4" />
      </td>
      <td className="flex-grow space-y-2">
        <header className="flex items-center justify-between">
          <Status status={order.status} />
          <span className="flex items-center gap-1">
            {order.cost}
            <BiShekel />
          </span>
        </header>
        <h1 className="font-extrabold">{order.customer}</h1>
        <footer className="flex justify-between text-sm">
          <p className="max-w-[50%] text-ellipsis overflow-hidden whitespace-nowrap">
            <span className="font-semibold">מק"ט:</span>{" "}
            <span className="text-ellipsis overflow-hidden whitespace-nowrap">
              {order._id}
            </span>
          </p>
          <p>
            <span className="font-semibold">תאריך:</span>{" "}
            <span>{order.createdAt.substring(0, 10)}</span>
          </p>
        </footer>
      </td>
      <td className="px-1">
        <HiChevronLeft />
      </td>
    </>
  );
};
