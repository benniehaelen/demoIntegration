import { LogService } from './log.service';
import { WindowService } from './window.service';
import { DataService } from './data.service';
import { UrlManagingService } from './url-managing.service';

export const CORE_PROVIDERS: any[] = [LogService, WindowService, DataService,
  UrlManagingService];

export * from './data.service';
export * from './log.service';
export * from './window.service';
export * from './tokens';
export * from './url-managing.service';

