import { DefaultResponse } from '@app/models/DefaultResponse';
import { BatchData } from '@app/services/batch/BatchData';

export interface BatchesResult extends DefaultResponse {
    items: BatchData.BatchExecInfo[];
}