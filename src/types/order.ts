export type Order = {
    _id: string;
    notes: string;
    urgency: number;
    cost: number;
    prediction: boolean;
    branch: string;
    branchId: number;
    orderType: string | null;
    eventId: number | null;
    recurrence: number;
    customer: string;
    customerId: number;
    numOfGuests: number;
    source: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  }
  