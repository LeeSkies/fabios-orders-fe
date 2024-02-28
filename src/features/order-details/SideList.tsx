import { HiX } from "react-icons/hi";
import { Order } from "../../types/order";
import { useNavigate, useParams } from "react-router-dom";
import { useAnimationCD } from "../../hooks/useAnimationCD";

type Props = {
  selected: string | null;
  orders: Order[];
};

export const SideList = ({ selected, orders }: Props) => {
  const animationCount = useAnimationCD(orders?.length, 50, [orders]);

  const navigate = useNavigate();

  const handleClick = (e: React.BaseSyntheticEvent, orderId: string) => {
    if (orderId != selected) return;
    e.stopPropagation();
    navigate("/");
  };

  return (
    <aside className="flex flex-col gap-2 md:max-w-[33%]">
      {orders &&
        orders.map((order: Order, i: number) => (
          <button
            key={i}
            onClick={() => navigate("/" + order._id)}
            className={`flex gap-4 items-center border rounded-xl p-4 duration-300 ${
              animationCount > i ? "" : "translate-x-full"
            } ${selected == order._id ? "border-green-700 bg-green-100" : ""}`}
          >
            <input
              type="checkbox"
              onClick={(e) => e.stopPropagation()}
              className="w-4 h-4"
            />
            <div className="overflow-hidden">
              <h1 className="font-bold text-start text-ellipsis whitespace-nowrap overflow-hidden">
                {order.customer}
              </h1>
              <p className="text-ellipsis whitespace-nowrap overflow-hidden">
                {order._id}
              </p>
            </div>
            <i onClick={(e) => handleClick(e, order._id)} className="mr-auto">
              <HiX
                className={`text-xl ${
                  selected == order._id ? "text-green-700" : "opacity-0"
                }`}
              />
            </i>
          </button>
        ))}
    </aside>
  );
};
