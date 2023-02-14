import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';

import { LoginPageModule } from './pages/login-page/login-page.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { CampaignsPageModule } from './pages/campaigns-page/campaigns-page.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    LoginPageModule,
    HomePageModule,
    CampaignsPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
