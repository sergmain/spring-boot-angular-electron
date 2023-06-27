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

import {EventEmitter} from '@angular/core';
import {NotificationType} from '../enums/notification-type.enum';
import {NotificationAnimationType} from '../enums/notification-animation-type.enum';

export interface Notification {
  id?: string;
  type: NotificationType;
  icon: string;
  title?: any;
  content?: any;
  override?: any;
  html?: any;
  state?: string;
  createdOn?: Date;
  destroyedOn?: Date;
  animate?: NotificationAnimationType;
  timeOut?: number;
  maxLength?: number;
  pauseOnHover?: boolean;
  clickToClose?: boolean;
  clickIconToClose?: boolean;
  theClass?: string;
  click?: EventEmitter<{}>;
  clickIcon?: EventEmitter<{}>;
  timeoutEnd?: EventEmitter<{}>;
  context?: any;
}
