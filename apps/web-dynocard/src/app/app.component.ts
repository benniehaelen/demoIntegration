import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@iot-edge-dynocard/web';
import { DataService } from "@iot-edge-dynocard/core";

@Component({
  selector: 'iot-edge-dynocard-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor(private dataService: DataService) {
    super();
  }
}
