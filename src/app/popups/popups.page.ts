import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
	selector: 'app-popups',
	templateUrl: './popups.page.html',
	styleUrls: ['./popups.page.scss'],
})
export class PopupsPage implements OnInit {
	
	public timeBetweenPopups:number = 100;
	public sessionTime:number = 1;
	public popup:string = '';
	
	constructor(private imageService:ImagesService) { }
	
	ngOnInit() {
	}
	
	async startSession(){
		const bottomContent = document.querySelector('.bottom-content') as HTMLElement;
		if (bottomContent) {
			bottomContent.style.display = 'none';
		}

		const popup = document.querySelector('#popups') as HTMLElement;
		if (popup) { popup.style.display = 'block'; }
		
		this.popup = await this.imageService.getRandomImage();
		const interval = setInterval(async () => {
			this.popup = await this.imageService.getRandomImage();
		}, this.timeBetweenPopups);

		setTimeout(() => {
			clearInterval(interval);
			if (popup) { popup.style.display = 'none'; }
			if (bottomContent) { bottomContent.style.display = 'flex'; }
		}, this.sessionTime * 60 * 1000);
	}
	
}
