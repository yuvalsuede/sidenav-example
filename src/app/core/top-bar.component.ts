import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuService} from "./menu.service";
import {AuthenticationService} from "../shared/login.service";

@Component({
    selector: 'top-bar',
    template: `

      <button type="button" *ngIf="!IsOpen" class="btn btn-default" aria-label="Left Align" (click)="toggle()">
        <span class="glyphicon glyphicon-th" aria-hidden="true"></span>
      </button>
      
       <button type="button" *ngIf="auth.isAuthenticated()" class="logout btn btn-default"  (click)="auth.logout()">
        <span style="margin-right: 10px;">Logout</span><span class="glyphicon glyphicon-off" aria-hidden="true"></span>
      </button>

    `,
    styles: [`
      :host {
        height:41px;
        background: white;
        min-width: 920px;
        position: relative;
        z-index:10;  
        
        border-bottom: 1px solid #e1e2e4;
        color: #898e95;
      }
      .btn-default {
          color: #898e95;
          background-color: #fff;
          border-color: #898e95;
          border-radius: 0;
          height: 100%;
          border: 0;
          border-right: 1px solid #eff0f1;
          outline: none !important;
      }
      .btn-default:hover {
          background: #eff0f1;
      }
      .logout {
        float: right;
      }
    `]
})
export class TopbarComponent implements OnInit {

  get IsOpen() {
    return this.ms.IsMenuOpen;
  }

  constructor(private ms:MenuService, private auth:AuthenticationService) { }

  ngOnInit() {}

  toggle() {

    this.ms.setToggleMenu();

  }

}
