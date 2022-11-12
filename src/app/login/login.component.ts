import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/service';
import { MatDialog } from '@angular/material/dialog';
import { ImprintComponent } from '../imprint/imprint.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  title = 'form-focus';

  @ViewChild("input") myInputField: ElementRef;
  ngAfterViewInit() {
    if (this.myInputField?.nativeElement) {
      this.myInputField.nativeElement.focus();
    }
  }

  constructor(
    private router: Router,
    public comp: DataService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.comp.startScreen = true;
  }

  onKey(event: any) { // without type info
    let value = event.target.value;
    if (value == 'Widder1911') {
      document.getElementById('loginCont').classList.add('scaleIn');
      setTimeout(() => {
        this.router.navigateByUrl('/startScreen');
      }, 499);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ImprintComponent);
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
