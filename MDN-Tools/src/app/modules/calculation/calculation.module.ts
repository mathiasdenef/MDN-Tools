import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { CalculationRoutingModule } from './calculation-routing.module';
import { WerkelijkeKostAutoComponent } from './pages/werkelijke-kost-auto/werkelijke-kost-auto.component';



@NgModule({
  declarations: [
    WerkelijkeKostAutoComponent,
  ],
  imports: [
    SharedModule,
    CalculationRoutingModule,
  ]
})
export class CalculationModule { }
