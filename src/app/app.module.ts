import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { SDWDistributorMeiggeDownComponent } from './s-d-w-distributor-meigge-down/s-d-w-distributor-meigge-down.component';
import { SDWDiversionReservoirFountainComponent } from './s-d-w-diversion-reservoir-fountain/s-d-w-diversion-reservoir-fountain.component';
import { SDWDrainageComponent } from './s-d-w-drainage/s-d-w-drainage.component';
import { SDWSpringComponent } from './s-d-w-spring/s-d-w-spring.component';
import { SDWHydraulicRamComponent } from './s-d-w-hydraulic-ram/s-d-w-hydraulic-ram.component';
import { SExtinguishingWaterSystemComponent } from './s-extinguishing-water-system/s-extinguishing-water-system.component';
import { SBallValveExtinguishingWaterSystemComponent } from './s-ball-valve-extinguishing-water-system/s-ball-valve-extinguishing-water-system.component';
import { SDWReservoirComponent } from './s-d-w-reservoir/s-d-w-reservoir.component';
import { SSWDiversionSeeExtinguishingWaterSystemComponent } from './s-s-w-diversion-see-extinguishing-water-system/s-s-w-diversion-see-extinguishing-water-system.component';
import { SSWDrainageComponent } from './s-s-w-drainage/s-s-w-drainage.component';
import { SDWFinishReservoirComponent } from './s-d-w-finish-reservoir/s-d-w-finish-reservoir.component';
import { DialogDescriptionSommerComponent } from './dialog-description-sommer/dialog-description-sommer.component';
import { WDWSpringComponent } from './w-d-w-spring/w-d-w-spring.component';
import { DialogDescriptionWinterComponent } from './dialog-description-winter/dialog-description-winter.component';
import { WDWHydraulicRamComponent } from './w-d-w-hydraulic-ram/w-d-w-hydraulic-ram.component';
import { WDWDrainageComponent } from './w-d-w-drainage/w-d-w-drainage.component';
import { WExtinguishingWaterSystemComponent } from './w-extinguishing-water-system/w-extinguishing-water-system.component';
import { WSWDrainageComponent } from './w-s-w-drainage/w-s-w-drainage.component';
import { WDWReservoirComponent } from './w-d-w-reservoir/w-d-w-reservoir.component';
import { WSWDiversionSeeExtinguishingWaterSystemComponent } from './w-s-w-diversion-see-extinguishing-water-system/w-s-w-diversion-see-extinguishing-water-system.component';
import { WAgainExtinguishingWaterSystemComponent } from './w-again-extinguishing-water-system/w-again-extinguishing-water-system.component';
import { WBallValveExtinguishingWaterSystemComponent } from './w-ball-valve-extinguishing-water-system/w-ball-valve-extinguishing-water-system.component';
import { WDWDiversionReservoirFountainComponent } from './w-d-w-diversion-reservoir-fountain/w-d-w-diversion-reservoir-fountain.component';
import { WDWDistributorMeiggeDownComponent } from './w-d-w-distributor-meigge-down/w-d-w-distributor-meigge-down.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { ImprintComponent } from './imprint/imprint.component';


@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    StartScreenComponent,
    SDWDistributorMeiggeDownComponent,
    SDWDiversionReservoirFountainComponent,
    SDWDrainageComponent,
    SDWSpringComponent,
    SDWHydraulicRamComponent,
    SExtinguishingWaterSystemComponent,
    SBallValveExtinguishingWaterSystemComponent,
    SDWReservoirComponent,
    SSWDiversionSeeExtinguishingWaterSystemComponent,
    SSWDrainageComponent,
    SDWFinishReservoirComponent,
    DialogDescriptionSommerComponent,
    WDWSpringComponent,
    DialogDescriptionWinterComponent,
    WDWHydraulicRamComponent,
    WDWDrainageComponent,
    WExtinguishingWaterSystemComponent,
    WSWDrainageComponent,
    WDWReservoirComponent,
    WSWDiversionSeeExtinguishingWaterSystemComponent,
    WAgainExtinguishingWaterSystemComponent,
    WBallValveExtinguishingWaterSystemComponent,
    WDWDiversionReservoirFountainComponent,
    WDWDistributorMeiggeDownComponent,
    ImprintComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatProgressBarModule,
    MatCardModule
  ],

  providers: [],

  bootstrap: [AppComponent]

})
export class AppModule { }
