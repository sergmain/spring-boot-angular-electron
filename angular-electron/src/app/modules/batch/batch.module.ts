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

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialAppModule } from '@app/ngmaterial.module';
import { CtModule } from '@app/modules/ct/ct.module';
import { BatchRootComponent } from './batch-root/batch-root.component';
import { CopyRightModule } from '@app/modules/copy-right/copy-right.module';
import { BatchListComponent } from './batch-list/batch-list.component';
import { RoleRouteGuard } from '@src/app/guards/role-route.guard';
import { Role } from '@src/app/services/authentication';

const commonRequiredRoles: Role[] = [Role.Admin, Role.Data, Role.Manager, Role.Operator];

export const BatchRoutes: Routes = [
    {
        path: '',
        component: BatchRootComponent,
        canActivate: [RoleRouteGuard],
        data: { requiredRoles: commonRequiredRoles },
        children: [
            {
                path: '',
                component: BatchListComponent,
                canActivate: [RoleRouteGuard],
                data: { requiredRoles: commonRequiredRoles },
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(BatchRoutes)],
    exports: [RouterModule],
    declarations: []
})
export class BatchRoutingModule { }


@NgModule({
    imports: [
        CommonModule,
        BatchRoutingModule,
        CtModule,
        MaterialAppModule,
        FormsModule,
        ReactiveFormsModule,
        CopyRightModule,
        TranslateModule.forChild({})
    ],
    declarations: [
        BatchRootComponent,
        BatchListComponent
    ]
})
export class BatchModule { }