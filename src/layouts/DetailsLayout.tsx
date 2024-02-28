import { useEffect, useState } from "react";
import { SideList } from "../features/order-details/SideList";
import { useNavigate, useParams } from "react-router-dom";
import { useOrders } from "../hooks/useOrders";
import { useSearch } from "../hooks/useSearch";
import { Order } from "../types/order";
import { DetailsDisplay } from "../features/order-details/DetailsDisplay";
import { useWindowSize } from "../hooks/useWindowSize";

type Props = {};

export const DetailsLayout = (props: Props) => {
  const [selected, setSelected] = useState<null | string>(null);

  const [orders, setOrders] = useState<Order[]>([]);

  const { id } = useParams();

  const ordersQuery = useOrders((data: Order[]) => setOrders(data));

  useSearch(ordersQuery.refetch, (data: Order[]) => setOrders(data));

  const windowSize = useWindowSize();

  const navigate = useNavigate();

  useEffect(() => {
    if (!id || orders.length <= 0) return;
    if (orders.find((order) => order._id === id)) setSelected(id);
    else setSelected(orders[0]._id);
  }, [id, orders]);

  return (
    id && (
      <article className="flex gap-1 md:gap-2 lg:gap-4">
        <SideList selected={selected} orders={orders} />
        <DetailsDisplay
          selected={selected}
          order={orders.find((o) => o._id == selected) ?? null}
        />
      </article>
    )
  );
};
