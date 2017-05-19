import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthenticationService} from "./shared/auth.service";

@Component({
  selector: 'app-root',
  template: `
    <div class="page-container">
      <div class="app-ui">
        <sidebar *ngIf="auth.isAuthenticated()">
        </sidebar>
        <div id="app-main">
          <top-bar *ngIf="auth.isAuthenticated()"></top-bar>
          <router-outlet></router-outlet>
        </div>

      </div>
    </div>



  `,
  styles: [`
    .page-container {
      bottom: 0;
      left: 0;
      overflow-x: auto;
      overflow-y: hidden;
      position: fixed;
      right: 0;
      top: 0;
      z-index: 0;
      display: flex;
      flex-direction: column;
    }

    .app-ui {
      display: flex;
      flex: 1;
      min-width: 1px;
      z-index: 0;
    }

    #app-main {
      display: flex;
      flex: 1;
      flex-direction: column;
      min-width: 1px;
      z-index: 0;
    }

  `]
})
export class AppComponent {

  constructor(
    private route:ActivatedRoute,
    public auth: AuthenticationService) {

  }



}
