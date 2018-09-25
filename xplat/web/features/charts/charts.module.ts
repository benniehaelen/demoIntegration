import { NgModule } from '@angular/core';

import { UIModule } from '../ui/ui.module';
import { CHARTS_COMPONENTS } from './components';

@NgModule({
  imports: [UIModule],
  declarations: [...CHARTS_COMPONENTS],
  exports: [...CHARTS_COMPONENTS]
})
export class ChartsModule {}
