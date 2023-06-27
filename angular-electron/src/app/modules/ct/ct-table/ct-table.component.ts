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

import {
    Component,
    OnInit,
    OnDestroy,
    ChangeDetectorRef,
    Input,
    OnChanges
} from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ct-table',
    templateUrl: './ct-table.component.html',
    styleUrls: ['./ct-table.component.scss']
})
export class CtTableComponent implements OnInit, OnDestroy, OnChanges {
    @Input() isWaiting: boolean;

    state = {
        wait: false
    };

    isFnMode: boolean;

    constructor(private changeDetector: ChangeDetectorRef) { }

    ngOnInit(): void {
        if (this.isWaiting === undefined) {
            this.isFnMode = true;
        } else {
            this.isFnMode = false;
            this.state.wait = this.isWaiting;
        }
    }

    ngOnDestroy(): void {
        this.changeDetector.detach();

    }

    ngOnChanges(): void {
        if (this.isFnMode) {

        } else {
            this.state.wait = this.isWaiting;
        }
    }

    wait(): void {
        if (this.isFnMode) {
            this.state.wait = true;
            // eslint-disable-next-line @typescript-eslint/dot-notation
            if (!this.changeDetector['destroyed']) {
                this.changeDetector.detectChanges();
            }
        }
    }
    show(): void {
        if (this.isFnMode) {
            this.state.wait = false;
            // eslint-disable-next-line @typescript-eslint/dot-notation
            if (!this.changeDetector['destroyed']) {
                this.changeDetector.detectChanges();
            }
        }
    }
}