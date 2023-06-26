import { DefaultResponse } from '@app/models/DefaultResponse';
import { BatchData } from './BatchData';

export interface BatchesResult extends DefaultResponse {
    items: BatchData.BatchExecInfo[];
}