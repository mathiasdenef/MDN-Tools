import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { AutoWerkelijkeKostRoutingModule } from './auto-werkelijke-kost-routing.module';
import { AutoWerkelijkeKostComponent } from './pages/auto-werkelijke-kost/auto-werkelijke-kost.component';



@NgModule({
  declarations: [
    AutoWerkelijkeKostComponent
  ],
  imports: [
    SharedModule,
    AutoWerkelijkeKostRoutingModule,
  ]
})
export class AutoWerkelijkeKostModule { }
