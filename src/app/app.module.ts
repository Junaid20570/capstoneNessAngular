import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainnavbarComponent } from './mainnavbar/mainnavbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ResetComponent } from './reset/reset.component';
import { ForgotComponent } from './forgot/forgot.component';
import { MainComponent } from './main/main.component';
import { EmptyModalComponent } from './empty-modal/empty-modal.component';
import { JunaidComponent } from './junaid/junaid.component';
import { VinishaComponent } from './vinisha/vinisha.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { InvestmentsComponent } from './investments/investments.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { StockinfoComponent } from './stockinfo/stockinfo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import {MatButtonModule} from '@angular/material/button';

// import { RealEstateComponent } from 'junaid1/src/app/real-estate/real-estate.component'
// import { NavbarComponent } from 'junaid1/src/app/navbar/navbar.component'
import { AxisComponent } from './vinisha/axis/axis.component';
import { BondComponent } from './vinisha/bond/bond.component';
import { CommodityComponent } from './vinisha/commodity/commodity.component';
import { DetailsComponent } from './vinisha/details/details.component';
import { ItiDetailsComponent } from './vinisha/iti-details/iti-details.component';
import { MiraeDetailsComponent } from './vinisha/mirae-details/mirae-details.component';
import { MutualFundComponent } from './vinisha/mutual-fund/mutual-fund.component';
import { NavbarComponent } from './vinisha/navbar/navbar.component';
import { RealEstateComponent } from './vinisha/real-estate/real-estate.component';

// import { StockdetailsComponent } from './junaid/stockdetails/stockdetails.component';
import { StockComponent } from './junaid/stock/stock.component';
import { SearchPipe } from './junaid/pipes/search.pipe';
import { StockdetailsComponent } from './junaid/stockdetails/stockdetails.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MainnavbarComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ResetComponent,
    ForgotComponent,
    MainComponent,
    EmptyModalComponent,
    JunaidComponent,
    VinishaComponent,
    UserProfileComponent,
    PortfolioComponent,
    ServicesComponent,
    InvestmentsComponent,
    FooterComponent,
    ContactComponent,
    StockinfoComponent,
    StockComponent,
    AxisComponent,
    BondComponent,
    CommodityComponent,
    DetailsComponent,
    ItiDetailsComponent,
    MiraeDetailsComponent,
    MutualFundComponent,
    RealEstateComponent,
    StockComponent,
    SearchPipe,
    StockdetailsComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    CanvasJSAngularChartsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
