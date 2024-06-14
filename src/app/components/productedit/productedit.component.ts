import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrl: './productedit.component.css'
})
export class ProducteditComponent {
  constructor(private productservice: ProductService, private route: ActivatedRoute) { }
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    desc: new FormControl('', [Validators.required])
  })
  productId = this.route.snapshot.params['id']
  ngOnInit() {
    this.productservice.Get_Product_By_Id(this.productId).subscribe(data => {
      console.log(data);

      this.productForm.controls.name.setValue(data.name)
      this.productForm.controls.image.setValue(data.image)
      this.productForm.controls.price.setValue(data.price)
      this.productForm.controls.desc.setValue(data.desc)
    })
  }

  router = new Router()
  OnSubmit = () => {
    this.productservice.Update_Product(this.productForm.value as IProduct, this.productId).subscribe(data => {
      alert('Updaet Success')
      this.router.navigate([''])
    })
  }
}
