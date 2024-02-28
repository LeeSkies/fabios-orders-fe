import { useNavigate } from "react-router-dom";
import { Order } from "../../types/order";
import { DetailsDisplay } from "./DetailsDisplay";
import { HiArrowRight } from "react-icons/hi2";
import { useDetails } from "../../hooks/useDetails";
import { useSingleOrder } from "../../hooks/useSingleOrder";

type Props = {};

export const DetailsDrawer = (props: Props) => {
  const navigate = useNavigate();

  const orderQuery = useSingleOrder();

  return (
    orderQuery?.data && (
      <article
        onClick={(e) => e.stopPropagation()}
        className={`fixed inset-0 overflow-auto duration-300 bg-slate-100`}
      >
        <header className="flex justify-between p-4">
          <button onClick={() => navigate("/")}>
            <HiArrowRight className="text-xl" />
          </button>
          <button className="btn rounded bg-green-600 text-slate-100 font-bold p-2">
            שמור שינויים
          </button>
        </header>
        {orderQuery?.data && (
          <DetailsDisplay
            order={orderQuery?.data}
            selected={orderQuery?.data._id}
            isMobile={true}
          />
        )}
      </article>
    )
  );
};
