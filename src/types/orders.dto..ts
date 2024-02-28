import { Order } from "./order"

export type OrderSuccessObject = {
    success: boolean
    data: {
        count: number,
        next: null,
        previous: null,
        results: Order | Order[]
    }
}