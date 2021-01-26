import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import {RouterModule} from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    TopBarComponent,
    WeatherDetailsComponent,
    MainPageComponent
  ],
    imports: [
        BrowserModule,
        RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
