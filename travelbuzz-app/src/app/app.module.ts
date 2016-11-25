import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './results/result.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SliderComponent } from './image-sliders/slider.component';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent, HomeComponent, HeaderComponent, FooterComponent, SearchComponent, SearchResultComponent, DashboardComponent,
      SliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule,
    Ng2AutoCompleteModule,
    AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}