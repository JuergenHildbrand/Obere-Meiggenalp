import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/service';

@Component({
  selector: 'app-w-d-w-diversion-reservoir-fountain',
  templateUrl: './w-d-w-diversion-reservoir-fountain.component.html',
  styleUrls: ['./w-d-w-diversion-reservoir-fountain.component.scss']
})
export class WDWDiversionReservoirFountainComponent implements OnInit {

  constructor(public comp: DataService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.toggleText();
    this.comp.dDiversion = true;
    this.comp.dDistributor = false;
  }

  setVar() {
    this.comp.dDiversion = false;
    this.comp.dialogOpen = false;
  }

  toggleMap() {
    if (this.comp.mapOpen) {
      this.closeMap();
    } else {
      this.openMap();
    }
    this.toggleText();
  }
  
  closeMap() {
    document.getElementById('wDiversionRF').classList.add('toggleMapIn');
    this.comp.mapOpen = false;
    setTimeout(() => {
      document.getElementById('wDiversionRF').classList.add('d-none');
      document.getElementById('wDiversionRF').classList.remove('toggleMapIn');
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('toggleBtn');
      } else {
        this.comp.windowSmall = true;
      }
      this.comp.mapClose = true;
    }, 499);
  }

  openMap() {
    document.getElementById('wDiversionRF').classList.remove('d-none')
    document.getElementById('wDiversionRF').classList.add('toggleMapOut');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.getElementById('toggleBtn').classList.remove('toggleBtnLeft');
    } else {
      this.comp.windowSmall = false;
    }
    this.comp.mapOpen = true;
    this.comp.mapClose = false;
    setTimeout(() => {
      document.getElementById('wDiversionRF').classList.remove('toggleMapOut');
    }, 499);
  }

  toggleText() {
    if (this.comp.mapOpen) {
      (<HTMLInputElement>document.getElementById('toggleBtn')).value = 'Karte schliessen';
    }
    else {
      setTimeout(() => {
        (<HTMLInputElement>document.getElementById('toggleBtn')).value = 'Karte öffnen';
      }, 499);
    }
  }
  
}
