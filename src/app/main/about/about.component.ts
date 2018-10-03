import { Component, OnInit } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
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

        this.meta.addTags([
          { name: 'robots', content: 'noindex' },
          { httpEquiv: 'Content-Type', content: 'text/html'},
          { charset: 'UTF-8'},
          { property: 'og:title', content: "Update Allergy Profile"},
          { name: 'description', content: 'Maintain your allergy profile on Health Port.' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'}
        ], true);
    }

	ngOnInit() {
	}

}