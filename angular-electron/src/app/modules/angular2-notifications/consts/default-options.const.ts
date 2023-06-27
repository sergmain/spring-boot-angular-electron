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

import {DEFAULT_ICONS} from './default-icons.const';
import {Options} from '../interfaces/options.type';
import {NotificationAnimationType} from '../enums/notification-animation-type.enum';

export const DEFAULT_OPTIONS: Options = {
  position: ['bottom', 'right'],
  timeOut: 0,
  showProgressBar: true,
  pauseOnHover: true,
  lastOnBottom: true,
  clickToClose: true,
  clickIconToClose: false,
  maxLength: 0,
  maxStack: 8,
  preventDuplicates: false,
  preventLastDuplicates: false,
  theClass: '',
  rtl: false,
  animate: NotificationAnimationType.FromRight,
  icons: DEFAULT_ICONS
};
