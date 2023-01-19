export type Product =  {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  sale_price: number; 
  sku: string;
  barcode: string;
  createdAt?: string;   
  updatedAt?: string;
}

export type ProductDto =  {
  name: string;
  category: string;
  description: string;
  price: number;
  sale_price: number; 
  sku: string;
  barcode: string;
}
