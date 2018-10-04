import { Component, OnInit } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
	/**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private meta: Meta,
        private titleService:Title,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    )
    {
        this._fuseTranslationLoaderService.loadTranslations(english, turkish);

        this.titleService.setTitle("Sign Up for Health Port");
        this.meta.addTags([
          { name: 'robots', content: 'noindex' },
          { httpEquiv: 'Content-Type', content: 'text/html'},
          { charset: 'UTF-8'},
          { property: 'og:title', content: "Sign Up for Health Port"},
          { name: 'description', content: 'Join Health Port to create and manage your personalized, decentralized electronic health record (EHR) on the blockchain.' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'}
        ], true);
    }

	ngOnInit() {
	}

}