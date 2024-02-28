type Props = {
  status: string;
};

export const Status = (props: Props) => {
  switch (props.status) {
    case "AP":
      return (
        <span className="rounded bg-yellow-400 p-1 px-2 text-yellow-900">
          ממתין לאישור
        </span>
      );
    case "P":
      return (
        <span className="rounded border bg-blue-200 p-1 px-2 text-blue-700">
          מאושר
        </span>
      );
    case "D":
      return (
        <span className="rounded border bg-green-200 p-1 px-2 text-green-700">
          בוצע
        </span>
      );
    default:
      return (
        <span className="rounded border bg-slate-200 p-1 px-2 text-slate-700">
          ללא
        </span>
      );
  }
};
