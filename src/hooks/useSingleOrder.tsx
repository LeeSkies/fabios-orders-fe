import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const getOrder = async (id: string) => {
  const { data } = await axios.get("http://localhost:3000/orders/" + id);
  return data;
};

export const useSingleOrder = () => {
  const { id } = useParams();

  if (!id) return;

  return useQuery({
    queryKey: ["singleOrder"],
    queryFn: () => getOrder(id),
  });
};
