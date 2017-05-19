import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Project} from "../models/project";
import 'rxjs/add/operator/toPromise';
import {AppConfig} from "../app.config";

@Injectable()
export class ProjectsService {

  constructor(private http:Http, private config:AppConfig) {

    }

    private projectsUrl = `${this.config.apiUrl}/projects`;



  getProjects(): Promise<Project[]> {

    return this.http.get(this.projectsUrl)
      .toPromise()
      .then(response => response.json().data as Project[])
      .catch(this.handleError);
  }

  getProjectsMeta(id:number): Promise<Project> {

    return this.http.get(`${this.projectsUrl}/${id}`)
      .toPromise()
      .then(response => response.json().data as Project)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
