import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';

import { ChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';

import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    MyDoughnutChartComponent,
    MyBarChartComponent,
    MyRadarChartComponent,
    MyPieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
