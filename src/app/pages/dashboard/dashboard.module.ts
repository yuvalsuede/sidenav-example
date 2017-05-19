import { NgModule } from '@angular/core';
import {DashboardComponent} from "./dashboard.component";
import {SharedModule} from "../../shared/shared.module";
import {DashboardRoutingModule} from "./dashboard-routing.module";

@NgModule({
    imports: [ SharedModule, DashboardRoutingModule ],
    exports: [],
    declarations: [ DashboardComponent ],
    providers: [],
})
export class DashboardModule { }
