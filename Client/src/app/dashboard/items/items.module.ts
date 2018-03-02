import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ItemsRoutingModule } from './items-routing.module';

import { ItemsComponent } from './items.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {StoreService} from '../../store.service';

@NgModule({
  imports: [ThemeModule, ItemsRoutingModule, Ng2SmartTableModule],
  declarations: [ItemsComponent],
  providers: [StoreService]
})
export class ItemsModule {}
