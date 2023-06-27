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

import {Icons} from './icons';
import {NotificationAnimationType} from '../enums/notification-animation-type.enum';

export type VerticalPosition = 'top' | 'bottom' | 'middle';
export type HorizontalPosition = 'right' | 'left' | 'center';
export interface Position extends Array<VerticalPosition | HorizontalPosition> {
    0: VerticalPosition;
    1: HorizontalPosition;
}

export interface Options {
  position?: Position;
  timeOut?: number;
  showProgressBar?: boolean;
  pauseOnHover?: boolean;
  lastOnBottom?: boolean;
  clickToClose?: boolean;
  clickIconToClose?: boolean;
  maxLength?: number;
  maxStack?: number;
  preventDuplicates?: boolean;
  preventLastDuplicates?: boolean | string;
  theClass?: string;
  rtl?: boolean;
  animate?: NotificationAnimationType;
  icons?: Icons;
}
