import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getOrders = async (cb?: Function) => {
  const { data } = await axios.get("http://localhost:3000/orders");
  if (cb) cb(data.data.results);
  return data.data.results;
};

export const useOrders = (cb?: Function) =>
  useQuery({ queryKey: ["orders"], queryFn: () => getOrders(cb) });
