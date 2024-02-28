import { Header } from "../features/header/Header";
import { Outlet } from "react-router-dom";
import { useResetQuery } from "../hooks/useResetQuery";

type Props = {};

export const Layout = (props: Props) => {
  useResetQuery();

  return (
    <div className="px-3 lg:container m-auto py-8 flex flex-col gap-6">
      <Header />
      <Outlet />
    </div>
  );
};
