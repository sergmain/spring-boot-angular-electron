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

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

export interface MenuItem {
    label: string;
    url: string;
}


@Component({
    selector: 'ct-back-button',
    templateUrl: './ct-back-button.component.html',
    styleUrls: ['./ct-back-button.component.sass']
})
export class CtBackButtonComponent implements OnInit, OnDestroy {

    subs: Subscription[] = [];

    config: string[];

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.subs.push(this.router.events.subscribe(() => {
            this.setConfig();
        }));
        this.subs.push(this.activatedRoute.firstChild.data.subscribe(() => {
            this.setConfig();
        }));
    }

    setConfig(): void {
        this.config = this.activatedRoute?.snapshot?.firstChild?.data?.backConfig;
    }

    ngOnDestroy(): void {
        this.subs.forEach(sub => sub.unsubscribe());
    }

    back(): void {
        this.router.navigate(this.serialize(this.config));
    }

    serialize(config: string[]): string[] {
        let list: string[] = [].concat(this.router.url.split('/')).concat(config);
        config.forEach(() => list = fn(list));

        function fn(l: string[]): string[] {
            const i: number = l.indexOf('../') + 1;
            if (i) {
                l[l.indexOf('../') - 1] = null;
                l[l.indexOf('../')] = null;
            }
            return l.filter(v => v ? v : false);
        }
        return list;
    }
}
