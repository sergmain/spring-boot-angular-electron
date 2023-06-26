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