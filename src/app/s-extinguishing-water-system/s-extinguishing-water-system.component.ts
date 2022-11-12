import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/service';

@Component({
  selector: 'app-s-extinguishing-water-system',
  templateUrl: './s-extinguishing-water-system.component.html',
  styleUrls: ['./s-extinguishing-water-system.component.scss']
})
export class SExtinguishingWaterSystemComponent implements OnInit {

  constructor(public comp: DataService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.toggleText();
    this.comp.dRam = false;
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
    document.getElementById('sDistributor').classList.add('toggleMapIn');
    this.comp.mapOpen = false;
    setTimeout(() => {
      document.getElementById('sDistributor').classList.add('d-none');
      document.getElementById('sDistributor').classList.remove('toggleMapIn');
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('toggleBtnsExtinguishing');
      } else {
        this.comp.windowSmall = true;
      }
      this.comp.mapClose = true;
    }, 499);
  }

  openMap() {
    document.getElementById('sDistributor').classList.remove('d-none')
    document.getElementById('sDistributor').classList.add('toggleMapOut');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.getElementById('toggleBtnsExtinguishing').classList.remove('toggleBtnLeft');
    } else {
      this.comp.windowSmall = false;
    }
    this.comp.mapOpen = true;
    this.comp.mapClose = false;
    setTimeout(() => {
      document.getElementById('sDistributor').classList.remove('toggleMapOut');
    }, 499);
  }

  toggleText() {
    if (this.comp.mapOpen) {
      (<HTMLInputElement>document.getElementById('toggleBtnsExtinguishing')).value = 'Karte schliessen';
    }
    else {
      setTimeout(() => {
        (<HTMLInputElement>document.getElementById('toggleBtnsExtinguishing')).value = 'Karte öffnen';
      }, 499);
    }
  }

}
