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