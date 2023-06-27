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

import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {environment} from '@src/environments/environment';
import {AppIndexComponent} from './components/app-index/app-index.component';

const routes: Routes = [
    {
        path: '',
        component: AppIndexComponent,
    },
    {
        path: 'batch',
        loadChildren: () => import('src/app/modules/batch/batch.module').then(m => m.BatchModule),
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

const extraOptions: ExtraOptions = {
    useHash: environment.hashLocationStrategy,
    onSameUrlNavigation: 'reload',
    // relativeLinkResolution: 'legacy'
};

@NgModule({
    imports: [RouterModule.forRoot(routes, extraOptions)],
    exports: [RouterModule]
})

export class AppRoutingModule { }