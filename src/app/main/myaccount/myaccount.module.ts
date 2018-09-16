import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { MyaccountComponent } from './myaccount.component';
import { MatButtonModule, MatIconModule, MatCheckboxModule, MatGridListModule } from '@angular/material';

const routes = [
    {
        path     : 'myaccount',
        component: MyaccountComponent
    }
];

@NgModule({
    declarations: [
        MyaccountComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        MatGridListModule,

        TranslateModule,

        FuseSharedModule
    ],
    exports     : [
        MyaccountComponent
    ]
})

export class MyaccountModule
{
}
