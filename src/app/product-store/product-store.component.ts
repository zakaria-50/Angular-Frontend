import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.css']
})
export class ProductStoreComponent implements OnInit {


  products: Product[] ; 

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

    this.getProducts() ;
  }

  private getProducts(){
    this.productService.getProductsList().subscribe(data =>{
      this.products = data ; 
    });

}}
