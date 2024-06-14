import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductaddComponent } from './components/productadd/productadd.component';
import { ProducteditComponent } from './components/productedit/productedit.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';



const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'add', component: ProductaddComponent },
  { path: 'edit/:id', component: ProducteditComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
