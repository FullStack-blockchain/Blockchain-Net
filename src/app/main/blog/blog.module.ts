import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { BlogComponent } from './blog.component';
import { MatButtonModule, MatIconModule, MatCheckboxModule } from '@angular/material';

const routes = [
    {
        path     : 'blog',
        component: BlogComponent
    },
    {
        path: "blog/:id",
        component: BlogComponent 
    }
];

@NgModule({
    declarations: [
        BlogComponent
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
        BlogComponent
    ]
})

export class BlogModule
{
}
