import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruityComponent } from './fruity.component';
import { FruitDetailsComponent } from './fruit-details/fruit-details.component';

const routes: Routes = [
  { path: '', component: FruityComponent },
  { path: 'fruit-details', component: FruitDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruityRoutingModule {}
