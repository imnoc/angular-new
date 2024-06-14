import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { IProduct } from '../../interfaces/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private productservice: ProductService) { }
  products: IProduct[] = []
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    desc: new FormControl('', [Validators.required])
  })

  ngOnInit() {
    this.productservice.Get_All_Product().subscribe(data => {
      this.products = data
    })
  }
  OnDelete = (id: any) => {
    if (confirm('Are you sure?')) {
      this.productservice.Delete_Product(id).subscribe(data => {
        alert('Xoa thanh cong')
        this.products = this.products.filter(products => products.id !== id)
      })
    }
  }
}
