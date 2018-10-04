import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector   : 'home',
    templateUrl: './home.component.html',
    styleUrls  : ['./home.component.scss']
})
export class HomeComponent
{
    id: any;
    ncount: number;
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private meta: Meta,
        private titleService:Title,
        private activatedRoute: ActivatedRoute,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    )
    {
        this._fuseTranslationLoaderService.loadTranslations(english, turkish);

        this.titleService.setTitle("Health Port Blockchain Electronic Health Records (EHR)");
        this.meta.addTags([
          { name: 'robots', content: 'noindex' },
          { httpEquiv: 'Content-Type', content: 'text/html'},
          { charset: 'UTF-8'},
          { property: 'og:title', content: "Health Port Blockchain Electronic Health Records (EHR)"},
          { name: 'description', content: 'Health Port gives patient’s control over storage and access to their personal Electronic Health Record (EHR) via leveraging blockchain technology.' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'}
        ], true);
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => this.id = params['id']);
        console.log(this.id);
        this.ncount = 0;        
    }
    ngAfterViewChecked() {
        console.log(this.id);
        if(this.id == "about"){
            document.getElementById("in-help").scrollIntoView();
        }
        if(this.id == "contact"){
            document.getElementById("in-contact").scrollIntoView();
        }
        this.ncount++;
        if(this.ncount > 10){
            this.id = ""; this.ncount = 0;
        }
    }
    scroll(el) {
        console.log(el);
        el.scrollIntoView();
    }
}
