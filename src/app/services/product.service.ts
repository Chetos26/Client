import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';
import { ProductModel } from '../Models/ProductModel';
import { CreateProductDto } from '../Models/ProductModel';
import { UpdateProductDto } from 'src/app/Models/ProductModel';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  readonly API_URL: string = "https://api.escuelajs.co/api/v1/products";

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<ProductModel[]> {
    const url = `${this.API_URL}`; 
    return this.httpClient.get<ProductModel[]>(url);
    //obejeto.metodo
  }
  getOne(id: ProductModel['id']):Observable<ProductModel> {//solo devuelve un objeto
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<ProductModel>(url);
  }
  store(product: CreateProductDto):Observable<ProductModel> {//no se usaran todos o campos(id, category)
    const url = `${this.API_URL}`; 
    return this.httpClient.post<ProductModel>(url, product)
  }

  update(id: ProductModel['id'], product: UpdateProductDto):Observable<ProductModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<ProductModel>(url, product);//devuelve un observable de tipo productmodel
  }
  destroy(id: ProductModel['id']):Observable<any> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
    //objeto.atributo.metodo(delete)   
      return response.rta;
      })
      );
  }
}


