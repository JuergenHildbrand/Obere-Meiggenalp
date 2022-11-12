import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDescriptionSommerComponent } from '../dialog-description-sommer/dialog-description-sommer.component';


@Component({
  selector: 'app-s-d-w-distributor-meigge-down',
  templateUrl: './s-d-w-distributor-meigge-down.component.html',
  styleUrls: ['./s-d-w-distributor-meigge-down.component.scss']
})
export class SDWDistributorMeiggeDownComponent implements OnInit {

  constructor(public comp: DataService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.toggleText();
    window.scrollTo(0, 0);
    this.comp.dDiversion = false;
    this.comp.startScreen = false;
    if (!this.comp.dialogOpen) {
      this.openDialog('2000ms', '1500ms');
      this.comp.dialogOpen = true;
    } else {
      this.comp.dDistributor = true;
    };
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogDescriptionSommerComponent, {
      disableClose: true,
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  setVar() {
    this.comp.dDistributor = false;
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
    document.getElementById('sdDistributor').classList.add('toggleMapIn');
    this.comp.mapOpen = false;
    setTimeout(() => {
      document.getElementById('sdDistributor').classList.add('d-none');
      document.getElementById('sdDistributor').classList.remove('toggleMapIn');
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('toggleBtnsdDistributor');
      } else {
        this.comp.windowSmall = true;
      }
      this.comp.mapClose = true;
    }, 499);
  }

  openMap() {
    document.getElementById('sdDistributor').classList.remove('d-none')
    document.getElementById('sdDistributor').classList.add('toggleMapOut');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.getElementById('toggleBtnsdDistributor').classList.remove('toggleBtnLeft');
    } else {
      this.comp.windowSmall = false;
    }
    this.comp.mapOpen = true;
    this.comp.mapClose = false;
    setTimeout(() => {
      document.getElementById('sdDistributor').classList.remove('toggleMapOut');
    }, 499);
  }

  toggleText() {
    if (this.comp.mapOpen) {
      (<HTMLInputElement>document.getElementById('toggleBtnsdDistributor')).value = 'Karte schliessen';
    }
    else {
      setTimeout(() => {
        (<HTMLInputElement>document.getElementById('toggleBtnsdDistributor')).value = 'Karte öffnen';
      }, 499);
    }
  }

}