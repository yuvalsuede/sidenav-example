import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";


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
