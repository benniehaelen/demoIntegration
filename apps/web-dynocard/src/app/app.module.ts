import { NgModule } from '@angular/core';

// libs
import { environment } from '@iot-edge-dynocard/core';

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { ChartsModule } from '@iot-edge-dynocard/web';

import { AppComponent } from './app.component';

@NgModule({
  imports: [CoreModule, SharedModule, ChartsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
