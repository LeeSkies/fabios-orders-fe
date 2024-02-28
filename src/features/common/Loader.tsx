type Props = {
  size?: string;
};

export const Loader = ({ size }: Props) => {
  return (
    <div
      style={{ width: size ?? "8rem", height: size ?? "8rem" }}
      className="rounded-full animate-spin border-t-2 border-t-sky-500"
    ></div>
  );
};
