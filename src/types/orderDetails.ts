export type OrderDetails = {
    _id: string;
    orderId: string;
    notes: string;
    products: string;
    branch: string;
    prediction: boolean;
    orderType: string | null;
    customer: string;
    numOfGuests: number;
    unknownProducts: number;
    toDate: string
    source: string;
    createdAt: string;
    updatedAt: string;
  }
  