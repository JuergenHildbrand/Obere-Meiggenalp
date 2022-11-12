import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from './service/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(public comp: DataService) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.ngOnInit();
  }

  ngOnInit() {
    if (window.innerWidth < 924) {
      this.comp.windowSmall = true;
    } else {
      this.comp.mapOpen = true;
      this.comp.mapClose = false;
      this.comp.windowSmall = false;
    }
  }
}
