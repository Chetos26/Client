import { CategoryModel } from "./CategoryModel";

export interface ProductModel{
    id: number;
    title: string;
    price: number;
    images: string[];
    description: string;
    category: CategoryModel;
}

export interface CreateProductDto extends Omit<ProductModel, 'id' | 'category'>{
    categoryId:number;
}
export interface UpdateProductDto extends Partial<ProductModel>{
    categoryId?:number;
    //la incognita en el atributo indica que es opcional
}
