import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { StoreRoutingModule } from './Store-routing.module';

import { StoreComponent } from './Store.component';

@NgModule({
  imports: [ThemeModule, StoreRoutingModule],
  declarations: [StoreComponent],
  providers: []
})
export class StoreModule {}
