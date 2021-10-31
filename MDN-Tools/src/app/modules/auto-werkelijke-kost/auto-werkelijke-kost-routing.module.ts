import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoWerkelijkeKostComponent } from './pages/auto-werkelijke-kost/auto-werkelijke-kost.component';

const routes: Routes = [
  {
    path: '',
    component: AutoWerkelijkeKostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoWerkelijkeKostRoutingModule { }
