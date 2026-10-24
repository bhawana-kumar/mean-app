import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
}) export class dashboardComponent implements OnInit {
    admin = { "username": "admin" };
    constructor() {
       
    }
    ngOnInit() {
      
    }

    // checkactivatedRoute() {
    //     // Subscribe to route changes
    //     this.router.events.pipe(
    //         filter(event => event instanceof NavigationEnd)
    //       ).subscribe(() => {
    //         let activatedRoute = this.route;
    //         while (activatedRoute.firstChild) {
    //           activatedRoute = activatedRoute.firstChild;
    //         }
    //         if (activatedRoute.snapshot.routeConfig?.path === 'admin') {
    //          this.routeActivated = 'adminRoute'
    //         } 
    //       });
    // }
}