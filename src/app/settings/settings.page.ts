import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.page.html',
	styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
	
	imagePacks = [
		{ id: null, name: 'Any' },
		{ id: 'bondage', name: 'Bondage' },
		{ id: 'censored', name: 'Censored' },
		{ id: 'captions', name: 'Captions' },
		{ id: 'feet', name: 'Feet' },
		{ id: 'cum', name: 'Cum' },
		{ id: 'irl', name: 'IRL' },
		{ id: 'femdom', name: 'Femdom' },
		{ id: 'chastity', name: 'Chastity' },
	];
	
	selectedPack: string | null = null;
	
	constructor(private storage: Storage) {}
	
	async ngOnInit() {
		await this.storage.create();
		this.selectedPack = await this.storage.get('selectedPack');
	}
	
	async onPackChange(event: any) {
		await this.storage.set('selectedPack', this.selectedPack);
		console.log('Pack sélectionné :', this.selectedPack);
	}
	
}
