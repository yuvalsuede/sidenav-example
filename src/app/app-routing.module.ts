import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  // { path: '', redirectTo: 'contact', pathMatch: 'full'},
  // { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
  // { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
