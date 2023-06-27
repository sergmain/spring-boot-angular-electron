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

import { Subscription } from 'rxjs';
import { AuthenticationService } from '@services/authentication';

export class UIStateComponent {
    isLoading: boolean = false;
    subs: Subscription[] = [];

    constructor(readonly authenticationService: AuthenticationService) { }

    get isRole(): {
        Admin: boolean;
        Manager: boolean;
        Operator: boolean;
        Data: boolean;
        MasterAdmin: boolean;
        MasterOperator: boolean;
        MasterSupport: boolean;
        MasterAssetManager: boolean;
    } {
        return {
            Admin: this.authenticationService.isRoleAdmin(),
            Manager: this.authenticationService.isRoleManager(),
            Operator: this.authenticationService.isRoleOperator(),
            Data: this.authenticationService.isRoleData(),
            MasterAdmin: this.authenticationService.isRoleMasterAdmin(),
            MasterOperator: this.authenticationService.isRoleMasterOperator(),
            MasterSupport: this.authenticationService.isRoleMasterSupport(),
            MasterAssetManager: this.authenticationService.isRoleMasterAssetManager()
        };
    }

    subscribeSubscription(s: Subscription): void {
        this.subs.push(s);
    }

    unsubscribeSubscriptions(): void {
        // console.log(this.subs.length);
        this.subs.forEach(s => s.unsubscribe());
    }

    setIsLoadingStart(): void {
        this.isLoading = true;
    }

    setIsLoadingEnd(): void {
        this.isLoading = false;
    }

}