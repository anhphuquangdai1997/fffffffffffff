export interface Product {
    _id: string;
    name: string;
    ratings: number;
    price: number;
    description: string;
    images: Array<{
        _id: string;
        public_id: string;
        url: string;
    }>;
    Stock:number;
    category: string;
    reviews: Array<
        {
            _id: "string",
            user: "string",
            name: "string",
            rating: "number",
            comment: "string"
        }>
}