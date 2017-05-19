import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";

export const routes: Routes = [
  { path: ':id', component: DashboardComponent}
  // { path: '', redirectTo: 'contact', pathMatch: 'full'},
  // { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
  // { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
