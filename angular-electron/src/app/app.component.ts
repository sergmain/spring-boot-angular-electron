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

import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {UIStateComponent} from './models/UIStateComponent';
import {AuthenticationService} from '@services/authentication';
import {SettingsService, SettingsServiceEventChange} from '@services/settings/settings.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent extends UIStateComponent implements OnInit, OnDestroy {
    constructor(
        private translate: TranslateService,
        readonly authenticationService: AuthenticationService,
        private settingsService: SettingsService
    ) {
        super(authenticationService);
    }

    ngOnInit(): void {
        this.subscribeSubscription(
            this.settingsService.events.subscribe(event => {
                if (event instanceof SettingsServiceEventChange) {
                    this.translate.use(event.settings.language);
                }
            })
        );
    }
    ngOnDestroy(): void { this.unsubscribeSubscriptions(); }
}