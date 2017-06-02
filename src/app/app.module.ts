import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { AppComponent }        from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { MissionDetailComponent } from './mission-detail.component';
import { MissionsComponent }     from './missions.component';
import { MissionService }         from './mission.service';


import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MissionDetailComponent,
    MissionsComponent
  ],
  providers: [ MissionService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }