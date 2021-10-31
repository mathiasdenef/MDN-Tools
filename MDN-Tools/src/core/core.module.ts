import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    MenubarModule,
    TabViewModule,
  ],
  exports: [
    MenubarModule,
    TabViewModule,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. You should only import Core modules in the AppModule only.');
    }
  }
}
