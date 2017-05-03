import {Component, HostBinding, OnInit} from '@angular/core';
import {MenuService} from "./menu.service";
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
    selector: 'sidebar',
    host: {

    },
    template: `
      <div class="sidebar-inner">
        <div class="sidebar-header">
          <span class="close-icon glyphicon glyphicon-remove"  aria-hidden="true" (click)="toggleMenu()"></span>           
        </div>
      </div>

    `,
    styles: [`
      :host {
        min-height: 1px;
        overflow: hidden;
        display: flex;
        flex-direction: column;

        width: 244px;
        background: #2d3b55;
      }

      .sidebar-inner {
        flex: 1 1 auto;
        min-height: 1px;
        display: flex;
        flex-direction: column;
        position: relative;
      }

      .close-icon {
        padding: 0 10px;
        display: inline-flex;
        align-items: center;
        color: #9bb2bc;
      }

      .close-icon:hover {
        cursor: pointer;
        color : white;
      }
      .sidebar-header {
        display: flex;
        flex-shrink: 0;
        height: 40px;
        justify-content: flex-end;
      }
    `],
  animations: [
    trigger('toggleMenu', [
      state('open', style({
        'margin-left': '0',
      })),
      state('close', style({
        'margin-left': '-244px',
      })),
      transition('open <=> close', animate('250ms ease-out')),
    ]),
  ]
})
export class SidebarComponent implements OnInit {
    constructor(private ms: MenuService) { }
    state: string = 'close';

    @HostBinding('@toggleMenu') get toggleState() {
      return this.state;
    }

    ngOnInit() {

      this.ms.getToggleMenu().subscribe((open: boolean) => {

        if (open) this.state = 'open';
        if (!open) this.state = 'close';

      });

    }

  toggleMenu() {
      this.ms.setToggleMenu();
  }


}
