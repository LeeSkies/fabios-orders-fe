type Props = {
  count: number;
  type: "order" | "details";
};

export const OrderSkeleton = ({ count, type }: Props) => {
  if (type === "order")
    return (
      <tr className="flex flex-col gap-2">
        {Array(count)
          .fill("_")
          .map((_, i) => (
            <td
              key={i}
              className="w-full h-20 rounded-xl bg-slate-300 animate-pulse"
            ></td>
          ))}
      </tr>
    );
  else if (type === "details")
    return Array(count)
      .fill("_")
      .map((_, i) => (
        <div
          key={i}
          className="rounded-xl animate-pulse flex gap-4 my-2 w-full mx-4"
        >
          <span className="w-36 h-8 rounded bg-slate-300"></span>
          <span className="w-36 h-8 rounded bg-slate-300"></span>
        </div>
      ));
};
