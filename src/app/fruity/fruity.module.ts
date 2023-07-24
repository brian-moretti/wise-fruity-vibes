import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruityRoutingModule } from './fruity-routing.module';
import { FruityComponent } from './fruity.component';
import { FruitDetailsComponent } from './fruit-details/fruit-details.component';
import { SearchFruitComponent } from './search-fruit/search-fruit.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    FruityComponent,
    FruitDetailsComponent,
    SearchFruitComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FruityRoutingModule
  ]
})
export class FruityModule { }
