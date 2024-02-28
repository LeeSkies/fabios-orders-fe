import { useState } from "react";
import { Order } from "../../../types/order";
import { OrderDetails } from "../../../types/orderDetails";
import { Status } from "../../orders/Status";
import { OrderFormData } from "../../../types/orderFormData";

type Props = {
  order: Order;
  details: OrderDetails;
};

export const DetailsForm = ({ order }: Props) => {
  // const [dto, setDto] = useState(new OrderFormData());
  return (
    <form className="bg-slate-100 p-8">
      <div className="flex justify-around">
        <button className={`${order.status == "P" && "p-px bg-green-500"}`}>
          <Status status="P" />
        </button>
        <button className={`${order.status == "AP" && "p-px bg-green-500"}`}>
          <Status status="AP" />
        </button>
        <button className={`${order.status == "D" && "p-px bg-green-500"}`}>
          <Status status="D" />
        </button>
      </div>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </form>
  );
};
