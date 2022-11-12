import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../service/service';

@Component({
  selector: 'app-dialog-description-winter',
  templateUrl: './dialog-description-winter.component.html',
  styleUrls: ['./dialog-description-winter.component.scss']
})

export class DialogDescriptionWinterComponent implements OnInit {

  buttonDisabled = true;

  constructor(
    public dialogRef: MatDialogRef<DialogDescriptionWinterComponent>,
    public comp: DataService
  ) { }

  ngOnInit(): void {
  }

  setVar() {
    setTimeout(() => {
      this.comp.dSpring = true;
      this.comp.dRam = false;
    }, 1000);
  }

  onScroll(ev: any) {
    if (ev.target.offsetHeight + ev.target.scrollTop >= ev.target.scrollHeight) {
      document.getElementById('arrow').classList.add('d-none');
      this.buttonDisabled = false;
    }
  }

}
