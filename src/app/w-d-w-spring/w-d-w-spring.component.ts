import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDescriptionWinterComponent } from '../dialog-description-winter/dialog-description-winter.component';
import { DataService } from '../service/service';

@Component({
  selector: 'app-w-d-w-spring',
  templateUrl: './w-d-w-spring.component.html',
  styleUrls: ['./w-d-w-spring.component.scss']
})
export class WDWSpringComponent implements OnInit {

  constructor(public comp: DataService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.toggleText();
    this.comp.dRam = false;
    this.comp.startScreen = false;
    if (!this.comp.dialogOpen) {
      this.openDialog('2000ms', '1500ms');
      this.comp.dialogOpen = true;
    } else {
      this.comp.dSpring = true;
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string,): void {
    this.dialog.open(DialogDescriptionWinterComponent, {
      disableClose: true,
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  setVar() {
    this.comp.dSpring = false;
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
    document.getElementById('wSpring').classList.add('toggleMapIn');
    this.comp.mapOpen = false;
    setTimeout(() => {
      document.getElementById('wSpring').classList.add('d-none');
      document.getElementById('wSpring').classList.remove('toggleMapIn');
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('toggleBtn');
      } else {
        this.comp.windowSmall = true;
      }
      this.comp.mapClose = true;
    }, 499);
  }

  openMap() {
    document.getElementById('wSpring').classList.remove('d-none')
    document.getElementById('wSpring').classList.add('toggleMapOut');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.getElementById('toggleBtn').classList.remove('toggleBtnLeft');
    } else {
      this.comp.windowSmall = false;
    }
    this.comp.mapOpen = true;
    this.comp.mapClose = false;
    setTimeout(() => {
      document.getElementById('wSpring').classList.remove('toggleMapOut');
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
