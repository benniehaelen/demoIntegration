// url-managing.service.ts

/**
 * This class manages URL building for API calls in components.
 */
import { Injectable } from '@angular/core';

const prodUrl = 'https://iotdynocardmoxa.azurewebsites.net';
const hostName: string = prodUrl

@Injectable()
export class UrlManagingService {

  // These are all site root relative
  baseApiRoute: string = hostName + '/api';
  getDynoCardSampleData: string = this.baseApiRoute + '/DynoCardSampleData';

}
