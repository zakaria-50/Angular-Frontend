import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  uploadImage(selectedFile: File) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = "http://localhost:8082/api/products";

  constructor(private httpClient: HttpClient) { }

  getProductsList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseUrl}`);
  }

  createProduct(product: Product): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, product);
  }

  getProductById(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseUrl}/${id}`)
  }

  updateProduct(id: number , product: Product): Observable<Object>{
    return  this.httpClient.put(`${this.baseUrl}/${id}`, product) ; 
  }

  deleteProduct(id: number): Observable<Object>{

    return this.httpClient.delete(`${this.baseUrl}/${id}`) ; 
  }


  getProductsStore(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseUrl}`);
  }

  
}
