import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UslugaComponent } from './companenta/usluga/usluga.component';
import { GlavniComponent } from './companenta/glavni/glavni.component';
import { NavbarComponent } from './companenta/navbar/navbar.component';
import { HammaServicelarComponent } from './companenta/hamma-servicelar/hamma-servicelar.component';
import { KategoriyaComponent } from './companenta/glavni/glavniComent/kategori/kategoriya/kategoriya.component';
import { BrendPloshadki1920Component } from './companenta/brend-ploshadki-1920/brend-ploshadki-1920.component';
import { KartochkaBrendComponent } from './companenta/kartochka-brend/kartochka-brend.component';
import { FooterComponent } from './companenta/footer/footer.component';
import { AllServiceComponent } from './companenta/all-service/all-service.component';
import { NewestComponent } from './companenta/newest/newest.component';
import { OneProductComponent } from './companenta/one-product/one-product.component';
import { ProductsComponent } from './companenta/products/products.component';
import { ApplicationsComponent } from './companenta/applications/applications.component';
import { InfoComponent } from './companenta/info/info.component';
import { CommentsComponent } from './companenta/comments/comments.component';
import { MyAutoComponent } from './companenta/my-auto/my-auto.component';
import { PersInfoComponent } from './companenta/pers-info/pers-info.component';
import { NotFound404Component } from './companenta/not-found404/not-found404.component';
import { SuccessComponent } from './companenta/success/success.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './companenta/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    UslugaComponent,
    GlavniComponent,
    NavbarComponent,
    HammaServicelarComponent,
    UslugaComponent,
    KategoriyaComponent,
    BrendPloshadki1920Component,
    KartochkaBrendComponent,
    FooterComponent,
    AllServiceComponent,
    NewestComponent,
    OneProductComponent,
    ProductsComponent,
    ApplicationsComponent,
    InfoComponent,
    CommentsComponent,
    MyAutoComponent,
    PersInfoComponent,

    NotFound404Component,
    SuccessComponent,
    NotfoundComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
