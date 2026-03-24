import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import {
  startWith,
  distinctUntilChanged,
  debounceTime,
  switchMap,
  map,
  pipe,
  of,
  catchError,
  finalize,
} from 'rxjs';
import { Product } from './model/product.model';
import { Service } from './service/search.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ReactiveFormsModule, CommonModule],
})
export class AppComponent implements OnInit {
  constructor(private service: Service) {}

  form = new FormGroup({
    search: new FormControl('', { nonNullable: true }),
  });
  product: Product[] = [];
  loading: boolean = false;
  errorMessage: string = '';
  ngOnInit(): void {
    this.form.controls.search.valueChanges
      .pipe(
        startWith(''),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((searchTerm) => {
          this.loading = true;
          this.errorMessage = '';

          return this.service.getProducts(searchTerm).pipe(
            catchError(() => {
              this.errorMessage =
                'something went wrong while fetching products';
              return of([]);
            }),
            finalize(() => {
              this.loading = false;
            }),
          );
        }),
      )
      .subscribe((products) => {
        this.product = products;
      });
  }
}
