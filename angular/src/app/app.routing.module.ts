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