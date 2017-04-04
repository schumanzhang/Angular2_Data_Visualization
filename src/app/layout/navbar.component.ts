import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    listActive: boolean;
    graphActive: boolean;

    constructor(private _router: Router) {
        this.listActive = true;
        this.graphActive = false;
    }

    checkActiveLink(activeLink) {
        if (activeLink === 'list') {
            this.listActive = true;
            this.graphActive = false;
        } else if (activeLink === 'graph') {
            this.listActive = false;
            this.graphActive = true;
        }   
    }
}