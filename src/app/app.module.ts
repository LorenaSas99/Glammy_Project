import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { AccesoriibarbatiComponent } from './pages/accesoriibarbati/accesoriibarbati.component';
import { AccesoriifemeiComponent } from './pages/accesoriifemei/accesoriifemei.component';
import { CosmeticefemeiComponent } from './pages/cosmeticefemei/cosmeticefemei.component';
import { IncaltamintebarbatiComponent } from './pages/incaltamintebarbati/incaltamintebarbati.component';
import { CosComponent } from './pages/cos/cos.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NavigationComponent } from './pages/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AccesoriibarbatiComponent,
    AccesoriifemeiComponent,
    CosmeticefemeiComponent,
    IncaltamintebarbatiComponent,
    CosComponent,
    RegisterComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
