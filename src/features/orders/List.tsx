import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Order } from "../../types/order";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListOrder } from "./ListOrder";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ListHeaders } from "./ListHeaders";
import { useOrders } from "../../hooks/useOrders";
import { useAnimationCD } from "../../hooks/useAnimationCD";
import { useSearch } from "../../hooks/useSearch";
import { OrderSkeleton } from "../common/skeletons/Skeleton";

type Props = {};

export const List = (props: Props) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selected, setSelected] = useState<Order | null>(null);
  const windowSize = useWindowSize();

  const navigate = useNavigate();

  const ordersQuery = useOrders((data: Order[]) => setOrders(data));

  const query = useSearch(ordersQuery.refetch, (data: Order[]) =>
    setOrders(data)
  );

  const animationCount = useAnimationCD(orders.length, 100, [orders]);

  const selectOrder = (order: Order) => {
    setSelected(order);
  };

  return (
    <>
      <table className="w-full p-2 [&_th]:text-start [&_td]:text-start">
        <ListHeaders orders={orders} setOrders={setOrders} />
        <tbody className="space-y-2">
          {ordersQuery.isFetched &&
            orders.length > 0 &&
            orders.map((order: Order, i: number) => (
              <tr
                key={i}
                onClick={() => navigate("/" + order._id)}
                className={`border cursor-pointer active:scale-95 duration-1000 relative md:h-[4.3rem] p-2 flex max-md:items-center max-md:gap-4 max-md:px-4 md:grid md:grid-cols-5 rounded-xl ${
                  animationCount <= i && query == undefined
                    ? "translate-x-full"
                    : ""
                }`}
              >
                <ListOrder order={order} windowSize={windowSize} />
              </tr>
            ))}
          {ordersQuery.isLoading && <OrderSkeleton count={7} type="order" />}
        </tbody>
      </table>
      {ordersQuery.isError ||
        (ordersQuery.isFetched && orders.length <= 0 && (
          <h1 className="text-xl font-bold">לא נמצאו הזמנות</h1>
        ))}
    </>
  );
};
