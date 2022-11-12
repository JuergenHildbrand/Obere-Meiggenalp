import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    startScreen: boolean;
    dDistributor: boolean = false;
    dDiversion: boolean = false;
    dSpring: boolean = false;
    dRam: boolean = false;
    dialogOpen: boolean = false;
    mapOpen: boolean = true;
    mapClose: boolean = false;
    windowSmall: boolean;

    constructor() { }

    scrollDown() {
        window.scrollTo(0, 940);
    }

    
}