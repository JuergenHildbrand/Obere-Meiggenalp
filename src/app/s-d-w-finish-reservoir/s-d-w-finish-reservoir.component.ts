import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/service';

@Component({
  selector: 'app-s-d-w-finish-reservoir',
  templateUrl: './s-d-w-finish-reservoir.component.html',
  styleUrls: ['./s-d-w-finish-reservoir.component.scss']
})
export class SDWFinishReservoirComponent implements OnInit {
  
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
    document.getElementById('sfReservoir').classList.add('toggleMapIn');
    this.comp.mapOpen = false;
    setTimeout(() => {
      document.getElementById('sfReservoir').classList.add('d-none');
      document.getElementById('sfReservoir').classList.remove('toggleMapIn');
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('toggleBtnsfReservoir');
      } else {
        this.comp.windowSmall = true;
      }
      this.comp.mapClose = true;
    }, 499);
  }

  openMap() {
    document.getElementById('sfReservoir').classList.remove('d-none')
    document.getElementById('sfReservoir').classList.add('toggleMapOut');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.getElementById('toggleBtnsfReservoir').classList.remove('toggleBtnLeft');
    } else {
      this.comp.windowSmall = false;
    }
    this.comp.mapOpen = true;
    this.comp.mapClose = false;
    setTimeout(() => {
      document.getElementById('sfReservoir').classList.remove('toggleMapOut');
    }, 499);
  }

  toggleText() {
    if (this.comp.mapOpen) {
      (<HTMLInputElement>document.getElementById('toggleBtnsfReservoir')).value = 'Karte schliessen';
    }
    else {
      setTimeout(() => {
        (<HTMLInputElement>document.getElementById('toggleBtnsfReservoir')).value = 'Karte öffnen';
      }, 499);
    }
  }

}
