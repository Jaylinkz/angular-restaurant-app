import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {
    path:"", component:ReservationComponent
  },
  {
    path:"reservation/menu", component:MenuComponent
  },
  {
    path:"home", component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
