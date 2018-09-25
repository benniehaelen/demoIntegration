import { BaseComponent } from '@iot-edge-dynocard/core';

export abstract class DynoCardBaseComponent extends BaseComponent {
  public text: string = 'DynoCard Chart';

  constructor() {
    super();
  }
}
