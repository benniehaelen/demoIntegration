import { Component } from '@angular/core';

import { DynoCardBaseComponent } from '@iot-edge-dynocard/features';

@Component({
  selector: 'dynocard-chart',
  templateUrl: 'dynocard.component.html'
})
export class DynoCardComponent extends DynoCardBaseComponent {
  constructor() {
    super();
  }
}
