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
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {TranslateService} from '@ngx-translate/core';
import {UIStateComponent} from '@src/app/models/UIStateComponent';
import {AuthenticationService} from '@src/app/services/authentication';
import {BatchService} from '@src/app/services/batch/batch.service';
import {BatchData} from '@src/app/services/batch/BatchData';
import {BatchesResult} from '@src/app/services/batch/BatchesResult';
import {SettingsService} from '@src/app/services/settings/settings.service';


@Component({
    selector: 'batch-list',
    templateUrl: './batch-list.component.html',
    styleUrls: ['./batch-list.component.scss']
})
export class BatchListComponent extends UIStateComponent implements OnInit, OnDestroy {
    batchesResult: BatchesResult;
    isFiltered: boolean;
    dataSource: MatTableDataSource<BatchData.BatchExecInfo> = new MatTableDataSource([]);
    columnsToDisplay: string[] = ['id', 'name'];

    constructor(
        private batchService: BatchService,
        readonly authenticationService: AuthenticationService,
        readonly dialog: MatDialog,
        readonly translate: TranslateService,
        private settingsService: SettingsService
    ) {
        super(authenticationService);
    }

    ngOnInit(): void {
        this.updateTable();
    }

    ngOnDestroy(): void {
        this.unsubscribeSubscriptions();
    }

    updateTable(): void {
        this.isLoading = true;
        this.batchService
            .batches()
            .subscribe({
                next: batchesResult => {
                    this.batchesResult = batchesResult;
                    this.columnsToDisplay = ['id', 'name'];
                    this.dataSource = new MatTableDataSource(batchesResult.items || []);
                    this.isLoading = false;
                }
            });
    }

}
