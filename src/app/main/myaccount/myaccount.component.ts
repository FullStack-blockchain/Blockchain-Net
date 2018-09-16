import { Component, OnInit } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
  selector: 'myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})



export class MyaccountComponent implements OnInit {
    gray_color :String;
    white_color :String;
	/**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    )
    {
        this.gray_color = '#fafafb';
        this.white_color = '#fff';
        this._fuseTranslationLoaderService.loadTranslations(english, turkish);
    }

  	ngOnInit() {
  	}

}