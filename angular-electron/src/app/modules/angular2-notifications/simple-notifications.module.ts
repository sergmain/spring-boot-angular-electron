/*
 *    Copyright 2023, Sergio Lissner
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import { CommonModule } from '@angular/common';
import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { NotificationComponent } from './components/notification/notification.component';
import { SimpleNotificationsComponent } from './components/simple-notifications/simple-notifications.component';
import { DEFAULT_OPTIONS } from './consts/default-options.const';
import { Options } from './interfaces/options.type';
import { NotificationsService } from './services/notifications.service';

export const OPTIONS = new InjectionToken<Options>('options');
export function optionsFactory(options) {
  return {
    ...DEFAULT_OPTIONS,
    ...options
  };
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SimpleNotificationsComponent,
    NotificationComponent
  ],
  exports: [SimpleNotificationsComponent]
})
export class SimpleNotificationsModule {
  static forRoot(options: Options = {}): ModuleWithProviders<SimpleNotificationsModule> {
    return {
      ngModule: SimpleNotificationsModule,
      providers: [
        NotificationsService,
        {
          provide: OPTIONS,
          useValue: options
        },
        {
          provide: 'options',
          useFactory: optionsFactory,
          deps: [OPTIONS]
        }
      ]
    };
  }
}
