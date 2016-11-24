import { NgModule } from '@angular/core';


import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultComponent } from './results/result.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
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















// import { NgModule } from '@angular/core';


// import { HeaderComponent } from './header/header.component';
// import { HomeComponent } from './home/home.component';
// import { FooterComponent } from './footer/footer.component';
// import { SearchComponent } from './search/search.component';
// import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
// import { RouterModule, Routes } from '@angular/router';
// import { SearchResultComponent } from './results/result.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { AppComponent } from './app.component';
// import { SliderComponent } from './image-sliders/slider.component';

// const routes: Routes = [
//     { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//     { path: 'result', component: SearchResultComponent },
//     { path: 'dashboard', component: DashboardComponent },
//     {
//         path: 'dashboard', component: DashboardComponent,
//         children: [
//             { path: 'home', component: HomeComponent },
//             { path: 'result', component: SearchResultComponent },
//         ]
//     }
// ];
// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule {

// }