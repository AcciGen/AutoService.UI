import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlavniComponent } from './companenta/glavni/glavni.component';
import { UslugaComponent } from './companenta/usluga/usluga.component';
import { HammaServicelarComponent } from './companenta/hamma-servicelar/hamma-servicelar.component';
import { NavbarComponent } from './companenta/navbar/navbar.component';
import { BrendPloshadki1920Component } from './companenta/brend-ploshadki-1920/brend-ploshadki-1920.component';
import { KartochkaBrendComponent } from './companenta/kartochka-brend/kartochka-brend.component';
import { FooterComponent } from './companenta/footer/footer.component';
import { AllServiceComponent } from './companenta/all-service/all-service.component';
import { never } from 'rxjs';
import { NewestComponent } from './companenta/newest/newest.component';
import { OneProductComponent } from './companenta/one-product/one-product.component';
import { ProductsComponent } from './companenta/products/products.component';
import { NomlaComponent } from './companenta/company_create/nomla.component';
import { ApplicationsComponent } from './companenta/applications/applications.component';
import { InfoComponent } from './companenta/info/info.component';
import { CommentsComponent } from './companenta/comments/comments.component';
import { MyAutoComponent } from './companenta/my-auto/my-auto.component';
import { PersInfoComponent } from './companenta/pers-info/pers-info.component';
import { NotFound404Component } from './companenta/not-found404/not-found404.component';
import { SuccessComponent } from './companenta/success/success.component';
import { NotfoundComponent } from './companenta/notfound/notfound.component';


const routes: Routes = [
  {path : '', component: GlavniComponent},
  {path: 'glavni', component: GlavniComponent},
  {path:'usluga',component: UslugaComponent},
  {path:' ',component:NotfoundComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'ploshadki', component: BrendPloshadki1920Component},
  {path: 'kartochka-brend', component: KartochkaBrendComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'all_service', component: AllServiceComponent},
  {path: 'newest', component: NewestComponent},
  {path: 'one_product', component: OneProductComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'com_create', component: NomlaComponent},
  {path: 'application', component: ApplicationsComponent},
  {path: 'info', component: InfoComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'myAuto', component: MyAutoComponent},
  {path: 'persInfo', component: PersInfoComponent},
  {path: 'succes', component: SuccessComponent},
  {path: "notfound", component: NotfoundComponent},
  {path: '**', component: NotFound404Component},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
