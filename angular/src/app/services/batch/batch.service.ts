import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '@src/environments/environment';
import {Observable} from 'rxjs';
import {BatchesResult} from '@src/app/services/batch/BatchesResult';

const url = (s: string): string => `${environment.baseUrl}sandbox/${s}`;

@Injectable({ providedIn: 'root' })
export class BatchService {

    constructor(
        private http: HttpClient,
    ) {
    }

    batches(): Observable<BatchesResult> {
        return this.http.get<BatchesResult>( url(`list`) );
    }

}