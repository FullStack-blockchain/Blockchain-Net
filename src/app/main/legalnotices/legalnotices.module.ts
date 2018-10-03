import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { LegalnoticesComponent } from './legalnotices.component';
import { MatButtonModule, MatIconModule, MatCheckboxModule } from '@angular/material';

const routes = [
    {
        path     : 'legalnotices',
        component: LegalnoticesComponent
    },
    {
        path: "legalnotices/:id",
        component: LegalnoticesComponent 
    }
];

@NgModule({
    declarations: [
        LegalnoticesComponent
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
        LegalnoticesComponent
    ]
})

export class LegalnoticesModule
{
}
