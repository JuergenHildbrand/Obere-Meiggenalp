import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/service';

@Component({
  selector: 'app-w-ball-valve-extinguishing-water-system',
  templateUrl: './w-ball-valve-extinguishing-water-system.component.html',
  styleUrls: ['./w-ball-valve-extinguishing-water-system.component.scss']
})
export class WBallValveExtinguishingWaterSystemComponent implements OnInit {

  constructor(public comp: DataService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.toggleText();
    this.comp.dDiversion = false;
  }

  setVar() {
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
    document.getElementById('wBallValve').classList.add('toggleMapIn');
    this.comp.mapOpen = false;
    setTimeout(() => {
      document.getElementById('wBallValve').classList.add('d-none');
      document.getElementById('wBallValve').classList.remove('toggleMapIn');
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('toggleBtn');
      } else {
        this.comp.windowSmall = true;
      }
      this.comp.mapClose = true;
    }, 499);
  }

  openMap() {
    document.getElementById('wBallValve').classList.remove('d-none')
    document.getElementById('wBallValve').classList.add('toggleMapOut');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.getElementById('toggleBtn').classList.remove('toggleBtnLeft');
    } else {
      this.comp.windowSmall = false;
    }
    this.comp.mapOpen = true;
    this.comp.mapClose = false;
    setTimeout(() => {
      document.getElementById('wBallValve').classList.remove('toggleMapOut');
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
