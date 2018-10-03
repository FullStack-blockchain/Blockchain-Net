import { Component, OnInit } from '@angular/core';

@Component({
    selector   : 'footer',
    templateUrl: './footer.component.html',
    styleUrls  : ['./footer.component.scss']
})
export class FooterComponent
{
	currentYear: number;

	
    /**
     * Constructor
     */
    constructor()
    {
    }

    ngOnInit() {
        this.currentYear = (new Date()).getFullYear();      
    }
}
