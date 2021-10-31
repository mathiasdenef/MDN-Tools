import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auto',
    loadChildren: () => import('./modules/auto-werkelijke-kost/auto-werkelijke-kost.module').then(m => m.AutoWerkelijkeKostModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
