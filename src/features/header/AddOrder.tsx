import { HiMiniPlus } from "react-icons/hi2";
import { Modal } from "../common/modal/Modal";
import { useState } from "react";
import "../common/modal/modal.css";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { OrderFormData } from "../../types/orderFormData";
import { OrderForm } from "../common/forms/OrderForm";
import { Loader } from "../common/Loader";

type Props = {};

export const AddOrder = (props: Props) => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState<OrderFormData>(new OrderFormData());

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      try {
        await axios.post("http://localhost:3000/orders", formData);
        setModal(false);
        setFormData(new OrderFormData());
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <>
      <Modal
        isOpen={modal}
        setIsOpen={setModal}
        onClose={() => setFormData(new OrderFormData())}
      >
        <div className="container relative bg-slate-100 border border-blue-700 rounded">
          <OrderForm
            formData={formData}
            handleSubmit={handleSubmit}
            setFormData={setFormData}
          />
          {mutation.isPending && (
            <div className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center">
              <Loader />
            </div>
          )}
        </div>
      </Modal>
      <button
        onClick={() => setModal(true)}
        className="flex items-center gap-2 rounded border px-2 h-9 btn bg-green-600 text-slate-100"
      >
        <HiMiniPlus className="font-bold text-white" />
        <span className="max-[500px]:hidden">הוספת הזמנה</span>
      </button>
    </>
  );
};
