import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/service';

@Component({
  selector: 'app-s-d-w-diversion-reservoir-fountain',
  templateUrl: './s-d-w-diversion-reservoir-fountain.component.html',
  styleUrls: ['./s-d-w-diversion-reservoir-fountain.component.scss']
})
export class SDWDiversionReservoirFountainComponent implements OnInit {

  constructor(public comp: DataService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.toggleText();
    this.comp.dDistributor = false;
    this.comp.dDiversion = true;
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
    document.getElementById('sdDiversionRF').classList.add('toggleMapIn');
    this.comp.mapOpen = false;
    setTimeout(() => {
      document.getElementById('sdDiversionRF').classList.add('d-none');
      document.getElementById('sdDiversionRF').classList.remove('toggleMapIn');
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('toggleBtnsdDiversionRF');
      } else {
        this.comp.windowSmall = true;
      }
      this.comp.mapClose = true;
    }, 499);
  }
  
  openMap() {
    this.comp.mapOpen = true;
    document.getElementById('sdDiversionRF').classList.remove('d-none')
    document.getElementById('sdDiversionRF').classList.add('toggleMapOut');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.getElementById('toggleBtnsdDiversionRF').classList.remove('toggleBtnLeft');
    } else {
      this.comp.windowSmall = false;
    }
    this.comp.mapOpen = true;
    this.comp.mapClose = false;
    setTimeout(() => {
      document.getElementById('sdDiversionRF').classList.remove('toggleMapOut');
    }, 499);
  }

  toggleText() {
    if (this.comp.mapOpen) {
      (<HTMLInputElement>document.getElementById('toggleBtnsdDiversionRF')).value = 'Karte schliessen';
    }
    else {
      setTimeout(() => {
        (<HTMLInputElement>document.getElementById('toggleBtnsdDiversionRF')).value = 'Karte öffnen';
      }, 499);
    }
  }

}
