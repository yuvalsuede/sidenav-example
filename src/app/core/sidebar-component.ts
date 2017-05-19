import {Component, HostBinding, OnInit} from '@angular/core';
import {MenuService} from "./menu.service";
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import {Project} from "../models/project";
import {Observable} from "rxjs";
import {ProjectsService} from "../shared/projects.service";

@Component({
    selector: 'sidebar',
    host: {

    },
    template: `
      <div class="sidebar-inner">
        <div class="sidebar-header">
          <span class="logo">Kanbangular</span>
          <span class="close-icon glyphicon glyphicon-remove"  aria-hidden="true" (click)="toggleMenu()"></span>           
        </div>
        <div class="sidebar-body">
          <div class="project-list">
            <div class="project-list-header">
                <span class="flex-grow-1">Projects</span>
                <i class="add-project glyphicon glyphicon-plus-sign"></i>
            </div>
            <div class="project-list-body">
              <a  class="project-link" *ngFor="let project of projects" routerLink="/project/{{project.id}}" routerLinkActive="active"><div>{{ project.name }}</div></a>
            </div>
          </div>
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

      .logo {
          flex-grow: 1;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          padding: 0 10px;
          color: #98b0bc;
          font-size: 24px;
          font-weight: 100;
          letter-spacing: 2px;
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
      .sidebar-body {
        margin-top: 20px;
        padding: 0;
      }
      .project-list-header {
        color: #98b0bc;
        font-size: 14px;
        display: flex;
        align-items: center;                  
        justify-content: flex-start;
        line-height: 28px;
        padding: 0 10px 0 10px;
      }
      .add-project {
        color:#44545d;
        font-size: 20px;
      }
      .add-project:hover {
        cursor: pointer;
        color: #9bb2bc;
      }
      .project-link {
          display: flex;
          justify-content: flex-start;
          border-left: 3px solid transparent;
          color: #fff;
          line-height: 28px;
          padding: 0 10px 0 10px;
          
          font-weight: 200;
          letter-spacing: 1px;
          text-decoration: none;
      }
      .project-link:hover {
        cursor: pointer;
        text-decoration: none;
        background-color: #179dba;
      }
      .project-link.active {
        background-color: #222c3e;
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
    projects: Project[];

    constructor(private ms: MenuService, private projectService: ProjectsService) { }
    state: string = 'close';

    @HostBinding('@toggleMenu') get toggleState() {
      return this.state;
    }

    ngOnInit() {

      this.ms.getToggleMenu().subscribe((open: boolean) => {

        if (open) this.state = 'open';
        if (!open) this.state = 'close';

      });

      this.projectService.getProjects().then(projects => { this.projects = projects });

    }



  toggleMenu() {
      this.ms.setToggleMenu();
  }


}
