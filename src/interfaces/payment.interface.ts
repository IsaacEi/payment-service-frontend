
export interface PaymentCreate {
    concept:         string;
    productQuantity: number;
    payer:           string;
    payee:           string;
    totalAmount:     number;
}

export interface PaymentStatusUpdate {
    statusCode: PaymentStatusCode;
}



export interface Payment {
    id:              number;
    concept:         string;
    productQuantity: number;
    payer:           string;
    payee:           string;
    totalAmount:     number;
    status:          Status;
    createdAt:       Date;
    updatedAt:       Date;
}

export interface Status {
    id:   number;
    code: string;
    name: string;
}

export interface PaymentStatus {
    paymentId: number;
    status:    Status;
}

export interface PaymentsResponse {
    content:          Payment[];
    pageable:         Pageable;
    last:             boolean;
    totalPages:       number;
    totalElements:    number;
    size:             number;
    number:           number;
    sort:             Sort;
    first:            boolean;
    numberOfElements: number;
    empty:            boolean;
}

export interface Pageable {
    pageNumber: number;
    pageSize:   number;
    sort:       Sort;
    offset:     number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}

export type PaymentStatusCode =
  | "PENDING"
  | "PROCESSING"
  | "PAID"
  | "REJECTED"
  | "CANCELLED";

export const PAYMENT_STATUS_CODE: any[] = [
    {
        name: "PENDIENTE",
        code: "PENDING",
    },
    {
        name: "EN PROCESO",
        code: "PROCESSING",
    },
    {
        name: "PAGADO",
        code: "PAID",
    },
    {
        name: "RECHAZADO",
        code: "REJECTED",
    },
    {
        name: "CANCELADO",
        code: "CANCELLED",
    },
];
