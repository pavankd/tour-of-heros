import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service'
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from "./hero.service";
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes:Routes=[
      {
        path:'heroes',
        component:HeroesComponent
      },
      {
        path:'detail/:id',
        component: HeroDetailComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
      }
    ]

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
