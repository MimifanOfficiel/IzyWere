import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
import { Storage } from '@ionic/storage-angular';


@Component({
	selector: 'app-popups',
	templateUrl: './popups.page.html',
	styleUrls: ['./popups.page.scss'],
})
export class PopupsPage implements OnInit {
	
	public timeBetweenPopups:number = 100;
	public sessionTime:number = 1;
	public popup:string = '';
	public currentPack:string|null = null;
	
	constructor(private imageService:ImagesService, private storage: Storage) { }
	
	async ngOnInit() {
		await this.storage.create();
		
	}
	
	async startSession(){
		this.currentPack = await this.storage.get('selectedPack');

		const bottomContent = document.querySelector('.bottom-content') as HTMLElement;
		if (bottomContent) {
			bottomContent.style.display = 'none';
		}

		const popup = document.querySelector('#popups') as HTMLElement;
		if (popup) { popup.style.display = 'block'; }
		
		this.popup = await this.imageService.getRandomImage(this.currentPack);
		const interval = setInterval(async () => {
			this.popup = await this.imageService.getRandomImage(this.currentPack);
		}, this.timeBetweenPopups);

		setTimeout(() => {
			clearInterval(interval);
			if (popup) { popup.style.display = 'none'; }
			if (bottomContent) { bottomContent.style.display = 'flex'; }
		}, this.sessionTime * 60 * 1000);
	}
	
}
