import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { LoginComponent } from './login.component';
import { MatButtonModule, MatIconModule, MatCheckboxModule } from '@angular/material';

const routes = [
    {
        path     : 'login',
        component: LoginComponent
    }
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,

        TranslateModule,

        FuseSharedModule
    ],
    exports     : [
        LoginComponent
    ]
})

export class LoginModule
{
}
