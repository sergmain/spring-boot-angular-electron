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

import { environment } from '@src/environments/environment';

export enum SettingsTheme {
    Dark = 'dark',
    Light = 'light'
}

export enum SettingsLanguage {
    RU = 'RU',
    EN = 'EN'
}

export interface Settings {
    theme: SettingsTheme;
    sidenav: boolean;
    sidenavButton: boolean;
    language: SettingsLanguage;
    batchFilter: boolean;
}

export const setOfLanguages: Set < SettingsLanguage > = new Set([
    SettingsLanguage.EN
]);
//SettingsLanguage.RU,

export const defaultSettings: Settings = {
    theme: SettingsTheme.Light,
    batchFilter: false,
    sidenav: true,
    sidenavButton: true,
    language: setOfLanguages.has(environment.language as SettingsLanguage)
        ? (environment.language as SettingsLanguage)
        : SettingsLanguage.EN
};