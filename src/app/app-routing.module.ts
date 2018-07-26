import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchRestaurantComponent } from './search-restaurant/search-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { PageNotFOundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/listRestaurant', pathMatch: 'full'},
  {path: 'searchRestaurant', component: SearchRestaurantComponent},
  {path: 'listRestaurant', component: ListRestaurantComponent},
  {path: '**', component: PageNotFOundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
