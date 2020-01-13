import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { FoodBevComponent } from './food-bev/food-bev.component';
import { RestaurantComponent } from './food-bev/restaurant/restaurant.component';
import { BarsComponent } from './food-bev/bars/bars.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WellnessSpaComponent } from './lifestyle/wellness-spa/wellness-spa.component';
import { ActivityComponent } from './lifestyle/activity/activity.component';
import { WeddingComponent } from './wedding/wedding.component';
import { WesternWeddingComponent } from './wedding/western-wedding/western-wedding.component';
// import { CelebrationsComponent } from './wedding/celebrations/celebrations.component';
import { IndianWeddingComponent } from './wedding/indian-wedding/indian-wedding.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
// import { AppRoutingModule } from './'


@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomsComponent,
    FoodBevComponent,
    RestaurantComponent,
    BarsComponent,
    LifestyleComponent,
    WellnessSpaComponent,
    ActivityComponent,
    WeddingComponent,
    WesternWeddingComponent,
    // CelebrationsComponent
    IndianWeddingComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
