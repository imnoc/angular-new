import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  API_URL:string=('http://localhost:3000/products')

  Get_All_Product=():Observable<any>=>{
    return this.http.get(this.API_URL)
  }

  Get_Product_By_Id=(id:string):Observable<any>=>{
    return this.http.get(this.API_URL+'/'+id)
  }

  Add_Product=(data:IProduct)=>{
    return this.http.post(this.API_URL,data)
  }

  Update_Product=(data:IProduct,id:string):Observable<any>=>{
    return this.http.put(this.API_URL+'/'+id,data)
  }

  Delete_Product=(id:string)=>{
    return this.http.delete(this.API_URL+'/'+id)
  }
}
