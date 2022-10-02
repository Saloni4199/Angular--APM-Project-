import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { IProduct } from "src/Interfaces/Product/product";

@Injectable({
    providedIn: "root"
})
export class ProductService{
  private productUrl = "api/products/products.json";
  product!: IProduct;
  constructor(private http: HttpClient){
    
  }
    
    public getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
          tap(data => console.log("All data:", JSON.stringify(data))),
          catchError(this.handleError)
        );
    }

   
  private handleError(err: HttpErrorResponse){
    let errorMessage = "";
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occured: ${err.error.message}`;
    }
    else{
      errorMessage = `Server returned code ${err.status}, error message is ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  } 
}