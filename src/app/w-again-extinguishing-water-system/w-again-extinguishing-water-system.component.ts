import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/service';

@Component({
  selector: 'app-w-again-extinguishing-water-system',
  templateUrl: './w-again-extinguishing-water-system.component.html',
  styleUrls: ['./w-again-extinguishing-water-system.component.scss']
})
export class WAgainExtinguishingWaterSystemComponent implements OnInit {

  constructor(public comp: DataService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.toggleText();
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
    document.getElementById('waExtinguishing').classList.add('toggleMapIn');
    this.comp.mapOpen = false;
    setTimeout(() => {
      document.getElementById('waExtinguishing').classList.add('d-none');
      document.getElementById('waExtinguishing').classList.remove('toggleMapIn');
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('toggleBtn');
      } else {
        this.comp.windowSmall = true;
      }
      this.comp.mapClose = true;
    }, 499);
  }

  openMap() {
    document.getElementById('waExtinguishing').classList.remove('d-none')
    document.getElementById('waExtinguishing').classList.add('toggleMapOut');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.getElementById('toggleBtn').classList.remove('toggleBtnLeft');
    } else {
      this.comp.windowSmall = false;
    }
    this.comp.mapOpen = true;
    this.comp.mapClose = false;
    setTimeout(() => {
      document.getElementById('waExtinguishing').classList.remove('toggleMapOut');
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
