import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface InquirySubmission {
    name: string;
    color: string;
    size: string;
    productId?: bigint;
    email: string;
    message: string;
    quantity: bigint;
    phone: string;
}
export interface Inquiry {
    id: bigint;
    name: string;
    color: string;
    size: string;
    productId?: bigint;
    email: string;
    message: string;
    timestamp: bigint;
    quantity: bigint;
    phone: string;
}
export type InquiryResult = {
    __kind__: "ok";
    ok: bigint;
} | {
    __kind__: "err";
    err: string;
};
export interface Product {
    id: bigint;
    name: string;
    description: string;
    sizes: Array<string>;
    imageUrl: string;
    category: Category;
    colors: Array<string>;
    price: bigint;
}
export enum Category {
    school = "school",
    college = "college"
}
export interface backendInterface {
    getInquiries(): Promise<Array<Inquiry>>;
    getProductById(id: bigint): Promise<Product | null>;
    getProducts(): Promise<Array<Product>>;
    getProductsByCategory(category: Category): Promise<Array<Product>>;
    submitInquiry(submission: InquirySubmission): Promise<InquiryResult>;
}
