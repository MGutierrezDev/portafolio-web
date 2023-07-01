import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { FrameworksComponent } from './frameworks/frameworks.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SistemasComponent } from './sistemas/sistemas.component';
import { OthersComponent } from './others/others.component';
import { WorksComponent } from './works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FrameworksComponent,
    HeaderComponent,
    HomeComponent,
    SistemasComponent,
    OthersComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
