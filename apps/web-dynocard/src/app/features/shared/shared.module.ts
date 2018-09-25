import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@iot-edge-dynocard/web';

const MODULES = [UIModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule {}
