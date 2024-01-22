import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product() ; 


  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  constructor(private productService: ProductService, 
    private router: Router) { }

  ngOnInit(): void {
  }


  saveProduct(){
    this.productService.createProduct(this.product).subscribe(data=>{
      console.log(data) ; 
      this.goToProductList() ; 
    },
    error => console.log(error) );
    
  }

  goToProductList(){
    this.router.navigate(['/products'])
  }


  onSubmit(){

    console.log(this.product) ; 
    this.saveProduct() ; 
  }


}
