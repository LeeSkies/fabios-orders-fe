import { Order } from "../../types/order";
import { OrderDetails } from "../../types/orderDetails";
import { Status } from "../orders/Status";

type Props = {
  order: Order | null;
  details: OrderDetails | null;
};

const getUrgency = (level: number, prop: "type" | "class") => {
  switch (level) {
    case 0:
      return prop == "type" ? "ללא" : "bg-neutral-500";
    case 1:
      return prop == "type" ? "נמוכה" : "bg-yellow-500";
    case 2:
      return prop == "type" ? "גבוהה" : "bg-red-500";
  }
};

export const DetailsTable = ({ details, order }: Props) => {
  return (
    details &&
    order && (
      <table className="border-separate border-spacing-6">
        <tbody className="">
          <tr className="md:hidden">
            <td>סטטוס:</td>
            <td>
              <Status status={order.status} />
            </td>
          </tr>
          <tr>
            <td>תאריך אספקה:</td>
            <td className="font-bold">{details.toDate}</td>
          </tr>
          <tr>
            <td>דחיפות:</td>
            <td className="flex items-center gap-2 font-bold">
              <span
                className={`w-2 h-2 rounded-full ${getUrgency(
                  order.urgency,
                  "class"
                )}`}
              ></span>
              {getUrgency(order.urgency, "type")}{" "}
            </td>
          </tr>
          <tr>
            <td>סניף:</td>
            <td className="font-bold">{order.branch}</td>
          </tr>
          <tr>
            <td>סוג הזמנה:</td>
            <td className="font-bold">{order.orderType}</td>
          </tr>
          <tr>
            <td>מקור הזמנה:</td>
            <td className="font-bold">{order.source}</td>
          </tr>
          <tr>
            <td>תאריך יצירה:</td>
            <td className="font-bold">{order.createdAt.substring(0, 10)}</td>
          </tr>
          <tr>
            <td>שעת יצירה:</td>
            <td className="font-bold">{order.createdAt.substring(11, 16)}</td>
          </tr>
          <tr>
            <td>הערות:</td>
            <td className="font-bold">{order.notes}</td>
          </tr>
        </tbody>
      </table>
    )
  );
};
