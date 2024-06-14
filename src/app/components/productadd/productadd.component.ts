import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { IProduct } from '../../interfaces/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrl: './productadd.component.css'
})
export class ProductaddComponent {
  constructor(private productservice: ProductService) { }
  products: IProduct[] = []
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    desc: new FormControl('', [Validators.required])
  })
  router = new Router()
  OnSubmit = () => {
    this.productservice.Add_Product(this.productForm.value as IProduct).subscribe(data => {
      alert('Add Product Success'),
        this.products.push(data as IProduct)
      this.router.navigate([''])

    })
  }
}
