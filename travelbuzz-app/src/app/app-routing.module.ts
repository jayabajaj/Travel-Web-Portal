import { NgModule } from '@angular/core';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './results/result.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SliderComponent } from './image-sliders/slider.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'result', component: SearchResultComponent },
    { path: 'dashboard', component: DashboardComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}