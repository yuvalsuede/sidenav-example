import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="page-container">
      <div class="app-ui" (toggleSidenav)="toggleSidenav()">
        <sidebar>
        </sidebar>
        <div id="app-main">
          <top-bar></top-bar>
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
  title = 'app works!';

  toggleSidenav() {
    console.log('app component toggle');
  }
}
