import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodBevComponent } from './food-bev/food-bev.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingComponent } from './wedding/wedding.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
    {path:'accomodation', component:AccomodationComponent},
    {path:'celebrations',component:CelebrationsComponent},
    {path:'food-bev', component:FoodBevComponent},
    {path:'lifestyle', component:LifestyleComponent},
    {path:'offers',component:OffersComponent},
    {path:'wedding',component:WeddingComponent},
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})

export class AppRoutingModule {}
