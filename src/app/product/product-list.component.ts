import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "../../Interfaces/Product/product";
import { ProductService } from "./product.service";

@Component({
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{

    constructor(private productService : ProductService){}

    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageHeight: number = 40;
    showImage: boolean = false;
    FilterProducts: IProduct[] = [];
    products: IProduct[] =[];
    errorMessage: string = "";
    sub!: Subscription;
    private _listFilter: string = "";

    get listFilter(): string{
      return this._listFilter;
    }

    set listFilter(value: string){
      this._listFilter = value;
      console.log("In setter:" , value);
      this.FilterProducts = this.filterProducts(value);
    }

    filterProducts(value: string): IProduct[]{
      return this.products.filter(
        (product:IProduct) => product.productName.toLocaleLowerCase()
          .includes(value.toLocaleLowerCase()));
    }
    
    toggleImage(): void{
      this.showImage = !this.showImage;
    }

    ngOnInit(): void{
      this.sub = this.productService.getProducts().subscribe({
        next: products => {
          this.products = products;
          this.FilterProducts = this.products;
        },
        error: err => this.errorMessage = err
      });
    }

    ngOnDestroy(){
      this.sub.unsubscribe();
    }

    OnNotify(value: string):void{
      this.pageTitle = "Product List" + value;
    }
}