import { HttpClient } from '@angular/common/http';
import { Observable, map, pipe, delay } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private http: HttpClient) {}
  private baseUrl = 'https://fakestoreapi.com/products';

  getProducts(searchTerm: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((products) => {
        const trimmed = searchTerm.trim();
        if (!trimmed) {
          return products;
        }
        return products.filter((p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()),
        );
      }),
    );
  }
}
