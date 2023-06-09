import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ResetComponent } from './reset/reset.component';
import { ForgotComponent } from './forgot/forgot.component';
import { MainComponent } from './main/main.component';
import { EmptyModalComponent } from './empty-modal/empty-modal.component';
import { JunaidComponent } from './junaid/junaid.component';
import { VinishaComponent } from './vinisha/vinisha.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UserGuard } from './user.guard';
import { StockComponent } from './junaid/stock/stock.component';
import { StockdetailsComponent } from './junaid/stockdetails/stockdetails.component';
import { BondComponent } from './vinisha/bond/bond.component';
import { CommodityComponent } from './vinisha/commodity/commodity.component';
import { MutualFundComponent } from './vinisha/mutual-fund/mutual-fund.component';
import { RealEstateComponent } from './vinisha/real-estate/real-estate.component';
import { DetailsComponent } from './vinisha/details/details.component';
import { ItiDetailsComponent } from './vinisha/iti-details/iti-details.component';
import { MiraeDetailsComponent } from './vinisha/mirae-details/mirae-details.component';
import { AxisComponent } from './vinisha/axis/axis.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full' },
  {path:"main", component:MainComponent,
  children:[
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:"home", component:HomeComponent},
    {path:"junaid", component:JunaidComponent,
    children:[
      {path:"",redirectTo:"stock", pathMatch:"full"},
      {path:"stock",component:StockComponent},
      {path:"details",component:StockdetailsComponent}
    ]},
    {path:"vinisha", component:VinishaComponent,
    children:[
      {path:'', redirectTo:'bond', pathMatch:'full' },
      {path:'bond', component:BondComponent},
      {path:'commodity', component:CommodityComponent},
      {path:"mutual-fund", component:MutualFundComponent},
      {path:"real-estate", component:RealEstateComponent},
      {path:"details",component:DetailsComponent},
      {path:"miraedetails",component:MiraeDetailsComponent},
      {path:"itidetails",component:ItiDetailsComponent},
      {path:"axis",component:AxisComponent}
    ]},
    {path:"profile", component:UserProfileComponent, canActivate:[UserGuard]},
    {path:'portfolio', component:PortfolioComponent, canActivate:[UserGuard]},
    {path:'modal', component:EmptyModalComponent,
    children:[
      {path:'', redirectTo:'login',pathMatch:'full'},
      {path:"register", component:RegisterComponent},
      {path:"login", component:LoginComponent},
      {path:"forgot", component:ForgotComponent},
      {path:"reset", component:ResetComponent}
    ]},
  ]},
  {path:"**", component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
