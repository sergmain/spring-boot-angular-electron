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
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from '@app/guards/auth/auth.guard';
import { AuthenticationService } from '@app/services/authentication/authentication.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AppDialogConfirmationComponent } from './components/app-dialog-confirmation/app-dialog-confirmation.component';
import { AppIndexComponent } from './components/app-index/app-index.component';
import { AppViewComponent } from './components/app-view/app-view.component';
import { JwtInterceptor } from './jwt.interceptor';
import { SimpleNotificationsModule } from './modules/angular2-notifications/simple-notifications.module';
import { CopyRightModule } from './modules/copy-right/copy-right.module';
import { CtModule } from '@src/app/modules/ct/ct.module';
import { MaterialAppModule } from './ngmaterial.module';
import { NotificationsInterceptor } from './notifications.interceptor';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/');
}


@NgModule({
    declarations: [
        AppComponent,
        AppViewComponent,
        AppIndexComponent,
        AppDialogConfirmationComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialAppModule,
        CtModule,
        CopyRightModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        SimpleNotificationsModule.forRoot()
    ],
    entryComponents: [
        AppDialogConfirmationComponent,
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationsInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }