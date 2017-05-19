import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let projects = [
      {
        id: 1,
        name: 'Project 1'
      } ,
      {
        id: 2,
        name: 'Project 2'
      },
      {
        id: 3,
        name: 'Project 3'
      }
    ];

    let projectsMeta = [
      {
        id: 1,
        name: 'Project 1'
      },
      {
        id: 2,
        name: 'Project 1'
      },
      {
        id: 3,
        name: 'Project 1'
      }
    ];

    return {projects, projectsMeta};
  }
}
