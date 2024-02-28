import { HiArrowPath, HiPencil, HiPrinter } from "react-icons/hi2";
import { useDetails } from "../../hooks/useDetails";
import { Order } from "../../types/order";
import { OrderDetails } from "../../types/orderDetails";
import { Status } from "../orders/Status";
import { HiArrowCircleDown } from "react-icons/hi";
import { DetailsTable } from "./DetailsTable";
import { Search } from "../header/Search";
import { useState } from "react";
import { ProductsTable } from "./ProductsTable";
import { Modal } from "../common/modal/Modal";
import { DetailsForm } from "../common/forms/DetailsForm";
import { OrderSkeleton } from "../common/skeletons/Skeleton";

type Props = {
  selected: string | null;
  order: Order | null;
  isMobile?: boolean;
};

export const DetailsDisplay = ({
  order,
  selected,
  isMobile = false,
}: Props) => {
  const [displayType, setDisplayType] = useState<"products" | "details">(
    "details"
  );

  const detailsQuery = useDetails(isMobile ? selected : null);
  const details = detailsQuery?.data?.data as OrderDetails;

  return (
    order && (
      <>
        {details && detailsQuery?.isFetched && (
          <article className="flex-grow md:border rounded-xl lg:p-8">
            <header className="p-4 flex justify-between items-center">
              <div className="flex gap-7">
                <h1 className="font-bold text-xl">{details.customer}</h1>
                <div className="max-md:hidden">
                  <Status status={order.status} />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="btn rounded bg-slate-200 h-7 w-7">
                  <HiPencil className="m-auto" />
                </button>
                <button className="btn max-md:hidden rounded bg-slate-200 h-7 w-7">
                  <HiPrinter className="m-auto" />
                </button>
                <button className="btn rounded flex items-center gap-2 bg-slate-200 h-7 px-2">
                  <span>
                    <HiArrowPath />
                  </span>
                  <span className="max-md:hidden">הזמנה חוזרת</span>
                </button>
              </div>
            </header>
            <div className="flex gap-2 md:p-4 items-center max-md:mb-6">
              <div className="max-md:hidden">
                <Search />
              </div>
              <button
                onClick={() => setDisplayType("products")}
                className={`h-10 md:border md:rounded w-32 ${
                  displayType === "products"
                    ? "text-green-600 border-green-600 border-b"
                    : ""
                }`}
              >
                רשימת פריטים
              </button>
              <button
                onClick={() => setDisplayType("details")}
                className={`h-10 md:border md:rounded w-32 ${
                  displayType === "details"
                    ? "text-green-600 border-green-600 border-b"
                    : ""
                }`}
              >
                פרטי הזמנה
              </button>
            </div>
            {displayType === "details" ? (
              <DetailsTable details={details} order={order} />
            ) : (
              <ProductsTable products={details.products} />
            )}
          </article>
        )}
        {/* <Modal isOpen={true} setIsOpen={() => {}}>
          <DetailsForm order={order} details={details} />
        </Modal> */}
        {detailsQuery?.isLoading && <OrderSkeleton count={10} type="details" />}
        {detailsQuery?.isError && (
          <h1 className="text-xl font-bold">אירעה שגיאה בעת קבלת המידע</h1>
        )}
      </>
    )
  );
};
