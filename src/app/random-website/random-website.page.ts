import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
	selector: 'app-random-website',
	templateUrl: './random-website.page.html',
	styleUrls: ['./random-website.page.scss'],
})
export class RandomWebsitePage implements OnInit {
	
	constructor() { }
	
	ngOnInit() {
	}
	
	navigateToRandomWebsite() {
		const website = axios.get('https://cuties.lilabrandon.fr/randomLink');
		website.then((response) => {
			window.location.href = response.data;
		});
	}
	
}
