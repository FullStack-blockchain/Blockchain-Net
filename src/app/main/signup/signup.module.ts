import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { SignupComponent } from './signup.component';
import { MatButtonModule, MatIconModule, MatCheckboxModule } from '@angular/material';

const routes = [
    {
        path     : 'signup',
        component: SignupComponent
    }
];

@NgModule({
    declarations: [
        SignupComponent
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
        SignupComponent
    ]
})

export class SignupModule
{
}
