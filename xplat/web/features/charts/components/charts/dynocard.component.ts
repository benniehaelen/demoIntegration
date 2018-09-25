import { Component } from '@angular/core';

import { DynoCardBaseComponent } from '@iot-edge-dynocard/features';
import { DataService, UrlManagingService } from "@iot-edge-dynocard/core";

@Component({
  selector: 'dynocard-chart',
  templateUrl: 'dynocard.component.html'
})
export class DynoCardComponent extends DynoCardBaseComponent {
  chartData: any;

  constructor(private dataService: DataService, private urlManagingService: UrlManagingService) {
    super();

    this.loadChartData()
  }
  async loadChartData() {
    await this.dataService.get(this.urlManagingService.getDynoCardSampleData).toPromise()

      .then((response) => {
        this.chartData = response;
      })

      .catch(error => {
        console.log('DynoCardComponent.loadChartData() Error:', error.displayMessage);
        return error;
      });
  }
}
