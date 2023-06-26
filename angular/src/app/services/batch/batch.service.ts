import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { generateFormData } from '@src/app/helpers/generateFormData';
import { OperationStatusRest } from '@src/app/models/OperationStatusRest';
import { environment } from '@src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { BatchesResult } from './BatchesResult';

const url = (s: string): string => `${environment.baseUrl}dispatcher/batch/${s}`;

const FINISHED_STATE: number = 4;
const ERROR_STATE: number = -1;

export interface GetBatchesParams {
    page: number;
    filterBatches: boolean;
}

@Injectable({ providedIn: 'root' })
export class BatchService {
    finishedNotification: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(
        private http: HttpClient,
    ) {
    }

    batches(page: string, filterBatches: boolean): Observable<BatchesResult> {
        return this.http.get<BatchesResult>(
            url(`batches`),
            { params: { page, filterBatches: filterBatches ? 'true' : 'false' } }
        );
    }

    processResourceDeleteCommit(batchId: string): Observable<OperationStatusRest> {
        return this.http.post<OperationStatusRest>(url(`batch-delete-commit`), generateFormData({ batchId }));
    }

    uploadFile(sourceCodeId: string, file: File): Observable<OperationStatusRest> {
        return this.http.post<OperationStatusRest>(url(`batch-upload-from-file`), generateFormData({ file, sourceCodeId }));
    }

}