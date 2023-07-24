import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'fruity',
    loadChildren: () =>
      import('./fruity/fruity.module').then((m) => m.FruityModule),
  },
  { path: '', redirectTo: 'fruity', pathMatch: 'full' },
  { path: '**', redirectTo: 'fruity', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
