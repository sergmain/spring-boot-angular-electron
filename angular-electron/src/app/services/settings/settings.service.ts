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

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService, AuthenticationServiceEventChange, AuthenticationServiceEventLogin } from '../authentication';
import { defaultSettings, Settings, SettingsLanguage, SettingsTheme } from './Settings';

export class SettingsServiceEventChange {
    settings: Settings;
    constructor(settings: Settings) { this.settings = JSON.parse(JSON.stringify(settings)); }
}
export type SettingsServiceEvent = SettingsServiceEventChange;

@Injectable({ providedIn: 'root' })
export class SettingsService {
    private localStorageName: string = 'settingsService';
    private storageDefaultData: Settings = defaultSettings;

    events: BehaviorSubject<SettingsServiceEvent> = new BehaviorSubject<SettingsServiceEvent>(null);

    constructor(
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.events.subscribe(event => {
            if (event instanceof AuthenticationServiceEventChange) {
                if (event.user && event.user.username) {
                    this.localStorageName = event.user.username + ':' + 'settingsService';
                    this.getSettings(settings => {
                        SettingsService.updateTheme(settings.theme);
                        this.update(settings);
                    });
                } else {
                    this.localStorageName = 'settingsService';
                    this.getSettings(settings => {
                        SettingsService.updateTheme(settings.theme);
                        this.update({ ...settings, ...defaultSettings });
                    });
                }
            }

            if (event instanceof AuthenticationServiceEventLogin) {
                this.getSettings(settings => this.update({
                    ...settings,
                    sidenav: true
                }));
            }
        });
    }

    private static updateTheme(theme: SettingsTheme): void {
        const body: HTMLElement = document.querySelector('body');
        body.classList.remove('dark-theme');
        body.classList.remove('light-theme');
        switch (theme) {
            case SettingsTheme.Dark:
                body.classList.add('dark-theme');
                break;
            case SettingsTheme.Light:
                body.classList.add('light-theme');
                break;
            default:
                body.classList.add('light-theme');
                break;
        }
    }

    private update(newStorageData: Settings): void {
        this.setToLocalStorage(newStorageData);
        this.events.next(new SettingsServiceEventChange(newStorageData));
    }

    toggleSidenav(): void {
        this.getSettings(settings => this.update({
            ...settings,
            sidenav: !settings.sidenav
        }));
    }

    toggleLanguage(value: SettingsLanguage): void {
        this.getSettings(settings => this.update({
            ...settings,
            language: value
        }));
    }

    toggleTheme(): void {
        this.getSettings(settings => {
            const theme: SettingsTheme = (settings.theme === SettingsTheme.Dark) ?
                SettingsTheme.Light : SettingsTheme.Dark;
            SettingsService.updateTheme(theme);
            this.update({ ...settings, theme });
        });
    }

    toggleBatchFilter(value: boolean): void {
        this.getSettings(settings => this.update({
            ...settings,
            batchFilter: value
        }));
    }

    private getSettings(callback: (settings: Settings) => void): void {
        const settings: Settings = this.getFromLocalStorage();
        callback(settings as Settings);
    }

    clearLocalStorage(): void {
        localStorage.removeItem(this.localStorageName);
    }

    private setToLocalStorage(newStorageData: Settings): void {
        localStorage.setItem(this.localStorageName,
            JSON.stringify(Object.assign(
                {},
                this.storageDefaultData,
                newStorageData)
            )
        );
    }

    private getFromLocalStorage(): Settings {
        return Object.assign(
            {},
            this.storageDefaultData,
            JSON.parse(localStorage.getItem(this.localStorageName))
        );
    }
}