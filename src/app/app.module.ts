import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchRestaurantComponent } from './search-restaurant/search-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { PageNotFOundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { Custom_httpService } from './_services/custom_http.service';
import { RestaurantService } from './_services/restaurant.service';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { AutofocusDirective } from './_settings/autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchRestaurantComponent,
    ListRestaurantComponent,
    PageNotFOundComponent,
    EditRestaurantComponent,
    AutofocusDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Custom_httpService, RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
