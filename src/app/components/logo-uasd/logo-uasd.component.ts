import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-uasd',
  template: 
  `<div class="logo ms-3 mt-3 bg-light p-3 text-center rounded" style="width: 200px;
  border: 0.3px solid rgb(216, 216, 216);box-shadow: 0 2px 8px 0 rgba(73, 73, 73, 0.44);">
    <a [routerLink]="['']" routerLinkActive="router-link-active" class="navbar-brand">
        <img src="./assets/logo-uasd.png" width="40" height="45">
        <span class="fw-bold lead ms-3 text-dark">UASD</span>
    </a>
  </div>`
})
export class LogoUasdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
