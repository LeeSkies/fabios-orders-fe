import { useRef } from "react";
import { OrderFormData } from "../../../types/orderFormData";

type Props = {
  handleSubmit: Function;
  formData: OrderFormData;
  setFormData: (data: OrderFormData) => void;
};

export const OrderForm = ({ handleSubmit, formData, setFormData }: Props) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      action="#"
      className="flex flex-col p-8 rounded-full gap-2 [&_input]:rounded [&_input]:p-4 [&_input:focus]:border-blue-500 [&_input]:duration-300 [&_input]:bg-sky-100 [&_input]:border [&_input]:border-blue-300 [&_input:focus]:outline-none"
    >
      <label htmlFor="">שם הלקוח</label>
      <input
        min={2}
        type="text"
        value={formData.customer}
        onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
        placeholder="שם הלקוח"
      />
      <label htmlFor="">שם סניף</label>
      <input
        minLength={1}
        type="text"
        value={formData.branch}
        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
        placeholder="סניף"
      />
      <label htmlFor="">עלות</label>
      <input
        min={1}
        type="number"
        step={0.01}
        value={formData.cost}
        onChange={(e) =>
          setFormData({ ...formData, cost: Number(e.target.value) })
        }
        placeholder="עלות"
      />
      <label htmlFor="">סוג הזמנה</label>
      <input
        type="text"
        value={formData.orderType ?? ""}
        onChange={(e) =>
          setFormData({ ...formData, orderType: e.target.value })
        }
        placeholder="סוג הזמנה"
      />
      <div className="flex justify-between [&_*]:duration-150">
        <span>דחיפות:</span>
        <div className="flex gap-2">
          <span>גבוהה</span>
          <input
            type="checkbox"
            onChange={() => setFormData({ ...formData, urgency: 2 })}
            checked={formData.urgency === 2}
          />
          <span>נמוכה</span>
          <input
            type="checkbox"
            onChange={() => setFormData({ ...formData, urgency: 1 })}
            checked={formData.urgency === 1}
          />
          <span>ללא</span>
          <input
            type="checkbox"
            onChange={() => setFormData({ ...formData, urgency: 0 })}
            checked={formData.urgency === 0}
          />
        </div>
      </div>
      <label htmlFor="">לאיזה תאריך</label>
      <input
        className="px-2"
        type="date"
        value={formData.toDate}
        onChange={(e) => setFormData({ ...formData, toDate: e.target.value })}
      />
      <label htmlFor="">הערות:</label>
      <textarea
        name=""
        id=""
        rows={3}
        value={formData.notes}
        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        placeholder="הערות"
        className="resize-none rounded bg-sky-100 border border-blue-300 focus:outline-none focus:border-blue-500 duration-300"
      ></textarea>
      <div className="flex justify-between mt-4">
        <button
          type="submit"
          className="btn rounded px-4 p-3 border border-green-700 bg-green-100 w-20 text-green-700"
        >
          שליחה
        </button>
        <button
          ref={buttonRef}
          type="button"
          id="close-button"
          className="btn rounded px-4 p-3 border border-red-700 bg-red-100 w-20 text-red-700"
        >
          ביטול
        </button>
      </div>
    </form>
  );
};
