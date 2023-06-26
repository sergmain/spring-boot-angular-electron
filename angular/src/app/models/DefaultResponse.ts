import { OperationStatus } from '@app/enums/OperationStatus';

export interface DefaultResponse {
    errorMessages: string[];
    infoMessages: string[];
    errorMessagesAsStr: string;
    errorMessagesAsList: string[];
    infoMessagesAsList: string[];

    status?: OperationStatus;
}