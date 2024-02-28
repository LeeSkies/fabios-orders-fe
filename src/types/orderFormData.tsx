export class OrderFormData {
    notes: string = "";
    urgency: number = 0;
    cost: number = 0;
    prediction: boolean = false;
    branch: string = "";
    branchId: number = 0;
    orderType: string | null = "";
    eventId: number | null = 0;
    recurrence: number = 0;
    customer: string = "";
    customerId: number = 1;
    toDate: string = new Date().toISOString().slice(0, 10);
    numOfGuests: number = 0;
    source: string = "הוקלד ידנית";
    status: string = "AP";
  }