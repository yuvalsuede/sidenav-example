import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SidebarComponent} from "./core/sidebar-component";
import {DashboardModule} from "./pages/dashboard/dashboard.module";
import {LoginComponent} from "./pages/login/login.component";

export const routes: Routes = [
  { path: 'project', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
  {
    path: 'login',
    component: LoginComponent,
    data : {
      hideNavigation : true
    }
  }
  // { path: '', redirectTo: 'contact', pathMatch: 'full'},
  // { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
  // { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing:true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
