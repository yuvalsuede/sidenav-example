# Sidebar Navigation

An Angular4 Sidebar Navigation using Angular Animations & Service
 
## Components

First define AppComponent
```
@Component({
  selector: 'app-root',
  template: `
    <div class="page-container">
      <div class="app-ui">
        <sidebar>
        </sidebar>
        <div id="app-main">
          <top-bar></top-bar>
        </div>

      </div>
    </div>
  `
})
export class AppComponent {

}

```

Now lets define a menu management service that manages our toggle state using Rx Observable

```
@Injectable()
export class MenuService {

  private open: boolean = false;

  private subject: Subject<boolean> = new Subject<boolean>();
  constructor() { }

  setToggleMenu(): void {
    this.open = !this.open;
    this.subject.next(this.open);
  }

  getToggleMenu(): Observable<any> {
    return this.subject.asObservable();
  }
}

```

Create a SideBar Component with Angular animations and state management, using `@HostBinding` 
```
@Component({
    selector: 'sidebar',
    host: {

    },
    template: `
      <div class="sidebar-inner"></div>
    `
    ...
    
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


}
```

Create Top Bar Component and inject our Menu Service, on button click use `toggle()` for changing state.

```
@Component({
    selector: 'top-bar',
    template: `
      <button type="button" class="btn btn-default" aria-label="Left Align" (click)="toggle()">
        <span class="glyphicon glyphicon-th" aria-hidden="true"></span>
      </button>

    `
})
export class TopbarComponent implements OnInit {

  constructor(private ms:MenuService) { }

  ngOnInit() { }

  toggle() {

    this.ms.setToggleMenu();

  }

}

```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

