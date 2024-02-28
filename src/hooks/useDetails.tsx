import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const getOrderDetails = async (id: string) => {
  const { data } = await axios.get(
    "http://localhost:3000/order-details/order/" + id
  );
  return data;
};
export const useDetails = (orderId?: string | null) => {
  let { id } = useParams();

  if (orderId) id = orderId;

  if (!id) return null;

  return useQuery({
    queryKey: ["order-details"],
    queryFn: () => getOrderDetails(id),
  });
};
