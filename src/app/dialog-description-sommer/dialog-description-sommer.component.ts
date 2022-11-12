import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../service/service';

@Component({
  selector: 'app-dialog-description-sommer',
  templateUrl: './dialog-description-sommer.component.html',
  styleUrls: ['./dialog-description-sommer.component.scss']
})
export class DialogDescriptionSommerComponent implements OnInit {

  buttonDisabled = true;

  constructor(
    public dialogRef: MatDialogRef<DialogDescriptionSommerComponent>,
    public comp: DataService
  ) { }

  ngOnInit(): void {
  }

  setVar() {
    setTimeout(() => {
      this.comp.dDistributor = true;
      this.comp.dDiversion = false;
    }, 1000);
  }

  onScroll(ev: any) {
    if (ev.target.offsetHeight + ev.target.scrollTop >= ev.target.scrollHeight) {
      document.getElementById('arrow').classList.add('d-none');
      this.buttonDisabled = false;
    }
  }

}
