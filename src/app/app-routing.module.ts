import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SBallValveExtinguishingWaterSystemComponent } from './s-ball-valve-extinguishing-water-system/s-ball-valve-extinguishing-water-system.component';
import { SDWDistributorMeiggeDownComponent } from './s-d-w-distributor-meigge-down/s-d-w-distributor-meigge-down.component';
import { SDWDiversionReservoirFountainComponent } from './s-d-w-diversion-reservoir-fountain/s-d-w-diversion-reservoir-fountain.component';
import { SDWDrainageComponent } from './s-d-w-drainage/s-d-w-drainage.component';
import { SDWFinishReservoirComponent } from './s-d-w-finish-reservoir/s-d-w-finish-reservoir.component';
import { SDWHydraulicRamComponent } from './s-d-w-hydraulic-ram/s-d-w-hydraulic-ram.component';
import { SDWReservoirComponent } from './s-d-w-reservoir/s-d-w-reservoir.component';
import { SDWSpringComponent } from './s-d-w-spring/s-d-w-spring.component';
import { SExtinguishingWaterSystemComponent } from './s-extinguishing-water-system/s-extinguishing-water-system.component';
import { SSWDiversionSeeExtinguishingWaterSystemComponent } from './s-s-w-diversion-see-extinguishing-water-system/s-s-w-diversion-see-extinguishing-water-system.component';
import { SSWDrainageComponent } from './s-s-w-drainage/s-s-w-drainage.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { MatDialogModule } from '@angular/material/dialog';
import { WDWSpringComponent } from './w-d-w-spring/w-d-w-spring.component';
import { WDWHydraulicRamComponent } from './w-d-w-hydraulic-ram/w-d-w-hydraulic-ram.component';
import { WDWDrainageComponent } from './w-d-w-drainage/w-d-w-drainage.component';
import { WExtinguishingWaterSystemComponent } from './w-extinguishing-water-system/w-extinguishing-water-system.component';
import { WDWReservoirComponent } from './w-d-w-reservoir/w-d-w-reservoir.component';
import { WSWDiversionSeeExtinguishingWaterSystemComponent } from './w-s-w-diversion-see-extinguishing-water-system/w-s-w-diversion-see-extinguishing-water-system.component';
import { WSWDrainageComponent } from './w-s-w-drainage/w-s-w-drainage.component';
import { WAgainExtinguishingWaterSystemComponent } from './w-again-extinguishing-water-system/w-again-extinguishing-water-system.component';
import { WBallValveExtinguishingWaterSystemComponent } from './w-ball-valve-extinguishing-water-system/w-ball-valve-extinguishing-water-system.component';
import { WDWDiversionReservoirFountainComponent } from './w-d-w-diversion-reservoir-fountain/w-d-w-diversion-reservoir-fountain.component';
import { WDWDistributorMeiggeDownComponent } from './w-d-w-distributor-meigge-down/w-d-w-distributor-meigge-down.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'startScreen', component: StartScreenComponent },
  { path: 'sommerDrinkingWaterDistributorMeiggeDown', component: SDWDistributorMeiggeDownComponent },
  { path: 'sommerDrinkingWaterDiversionReservoirFountain', component: SDWDiversionReservoirFountainComponent },
  { path: 'sommerDrinkingWaterDrainage', component: SDWDrainageComponent },
  { path: 'sommerDrinkingWaterSpring', component: SDWSpringComponent },
  { path: 'sommerDrinkingWaterHydraulicRam', component: SDWHydraulicRamComponent },
  { path: 'sommerExtinguishingWaterSystem', component: SExtinguishingWaterSystemComponent },
  { path: 'sommerBallValveExtinguishingWaterSystem', component: SBallValveExtinguishingWaterSystemComponent },
  { path: 'sommerDrinkingWaterReservoir', component: SDWReservoirComponent },
  { path: 'sommerSeeWaterDiversionSeeExtinguishingWaterSystem', component: SSWDiversionSeeExtinguishingWaterSystemComponent },
  { path: 'sommerSeeWaterDrainage', component: SSWDrainageComponent },
  { path: 'sommerDrinkingWaterFinishReservoir', component: SDWFinishReservoirComponent },
  { path: 'winterDrinkingWaterSpring', component: WDWSpringComponent },
  { path: 'winterDrinkingWaterHydraulicRam', component: WDWHydraulicRamComponent },
  { path: 'winterDrinkingWaterDrainage', component: WDWDrainageComponent },
  { path: 'winterExtinguishingWaterSystem', component: WExtinguishingWaterSystemComponent },
  { path: 'winterDrinkingWaterReservoir', component: WDWReservoirComponent },
  { path: 'winterSeeWaterDiversionSeeExtinguishingWaterSystem', component: WSWDiversionSeeExtinguishingWaterSystemComponent },
  { path: 'winterSeeWaterDrainage', component: WSWDrainageComponent },
  { path: 'winterAgainExtinguishingWaterSystem', component: WAgainExtinguishingWaterSystemComponent },
  { path: 'winterBallValveExtinguishingWaterSystem', component: WBallValveExtinguishingWaterSystemComponent },
  { path: 'winterDrinkingWaterDiversionReservoirFountain', component: WDWDiversionReservoirFountainComponent },
  { path: 'winterDrinkingWaterDistributorMeiggeDown', component: WDWDistributorMeiggeDownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    MatDialogModule
  ]})

export class AppRoutingModule { }
