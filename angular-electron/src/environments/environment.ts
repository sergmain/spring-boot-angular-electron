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

import { IEnvironment } from './IEnvironment';

export const environment: IEnvironment = {
    production: false,
    baseUrl: 'http://localhost:8080/rest/v1/',
    hashLocationStrategy: true,
    userLifeTime: 30 * 60 * 1000, // 30 minutes
    isSslRequired: false,
    batchInterval: 10 * 1000, // pause between requests in milliseconds, 0 means a disable of any requests
    language: 'EN',
    forTableRow: '20px',
    brandingTitle: 'Metaheuristic',
    brandingMsg: '<b>Metaheuristic platform</b><p>Metaheuristic is an application which implements (or intended to) a Turing complete machine.' +
    'The main use of MH is a management of distributed tasks. Right now there are two main areas where MH is being used:</p>' +
    '<ul><li>' +
        '<p>AI model’s hyper-parameter optimization purpose.</p>' +
            'Each optimization is presented as Experiment. An Experiment consists of some Tasks. Tasks are created at Dispatcher and distributed to Processor. ' +
        'For evaluating a performance of models, metrics and other data are collected and evaluated later by Metaheuristic.' +
        '</li>' +
        '<li>' +
        '<p>Batch processing.</p>' +
        'Common usage of batch processing - split data, create tasks for processing each part of data, process Tasks, aggregate results' +
        '</li>' +
    '</ul>'
    ,
    brandingMsgIndex: '<b>Metaheuristic platform</b><p>Metaheuristic is an application which implements (or intended to) a Turing complete machine.' +
        'The main use of MH is a management of distributed tasks. Right now there are two main areas where MH is being used:</p>' +
        '<ul><li>' +
        '<p>AI model’s hyper-parameter optimization purpose.</p>' +
        'Each optimization is presented as Experiment. An Experiment consists of some Tasks. Tasks are created at Dispatcher and distributed to Processor. ' +
        'For evaluating a performance of models, metrics and other data are collected and evaluated later by Metaheuristic.' +
        '</li>' +
        '<li>' +
        '<p>Batch processing.</p>' +
        'Common usage of batch processing - split data, create tasks for processing each part of data, process Tasks, aggregate results' +
        '</li>' +
        '</ul>',
};
