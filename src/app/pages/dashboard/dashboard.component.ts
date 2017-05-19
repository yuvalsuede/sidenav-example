import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../../shared/projects.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'dashboard',
    template: `
      <div class="project-header">
        <div class="title">{{ projectMeta?.name }}</div>
      </div>
    `,
    styles: [`
        .project-header {
           background-color: #fff;
          box-shadow: 0 2px 3px 0 rgba(0,0,0,0.1);
          display: flex;
          height: 60px;
          justify-content: center;
          min-width: 920px;
          padding: 0 20px 0 20px;
          align-items: center;
        }
        .project-header .title {
            
            font-weight: 600;
            line-height: 60px;
            font-size: 24px;
            color: #172132;
        }
    `]
})
export class DashboardComponent implements OnInit {
    id: number;
    projectMeta: any;

    constructor(private projectService: ProjectsService,
                private route: ActivatedRoute) { }

    ngOnInit() {
      this.projectMeta = this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number

        // In a real app: dispatch action to load the details here.
        console.log(this.id);
        this.projectService.getProjectsMeta(this.id).then(projectMeta => { this.projectMeta = projectMeta });
      });



    }

}
