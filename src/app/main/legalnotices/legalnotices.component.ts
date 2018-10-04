import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'legalnotices',
  templateUrl: './legalnotices.component.html',
  styleUrls: ['./legalnotices.component.scss']
})

export class LegalnoticesComponent implements OnInit {

    id: any;
    ncount: number;

    public privacy_show : boolean = false;
    public terms_policy_show : boolean = false;
    public terms_use_show : boolean = false;
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

        this.titleService.setTitle("Legal Notices from Health Port");
        this.meta.addTags([
          { name: 'robots', content: 'noindex' },
          { httpEquiv: 'Content-Type', content: 'text/html'},
          { charset: 'UTF-8'},
          { property: 'og:title', content: "Legal Notices from Health Port"},
          { name: 'description', content: 'Review all legal notices prior to using Health Port to manage your personal electronic health record (EHR) on the blockchain' },
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
        if(this.id == "privacy_policy"){
            document.getElementById("in_privacy_policy").scrollIntoView();
        }
        if(this.id == "terms_service"){
            document.getElementById("in_terms_service").scrollIntoView();
        }
        if(this.id == "terms_use"){
            document.getElementById("in_terms_use").scrollIntoView();
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

    continue_read(el) {
        if(el == "privacy")
            this.privacy_show = !this.privacy_show;
        else if(el == "terms_policy")
            this.terms_policy_show = !this.terms_policy_show;
        else if(el == "terms_use")
            this.terms_use_show = !this.terms_use_show;
    }

}