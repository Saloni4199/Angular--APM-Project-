import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { IProduct } from "src/Interfaces/Product/product";
import { ProductService } from "../product/product.service";

@Component({
    templateUrl: "./product-detail.component.html",
    styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit, OnDestroy{
    pageTitle: string = "Product-Detail";
    productList: IProduct[] = [];
    product: IProduct | undefined;
    sub! : Subscription;
    errorMessage : string = "";
    

    constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService){

    }
   
    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.sub = this.productService.getProducts().subscribe({
            next: products => {
                this.productList = products;
                this.product = this.productList.find((product: IProduct) => product.productId == id);
            },
            error: err => this.errorMessage = err
        });
    }
        

    OnBack(): void {
        this.router.navigate(["/products"]);
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
   
}