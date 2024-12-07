import { Injectable } from '@angular/core';
import axios from 'axios';
import { Buffer } from 'buffer';

@Injectable({
	providedIn: 'root'
})
export class ImagesService {
	
	constructor() { }
	
	async getRandomImage(pack:String|null): Promise<string> {

		return new Promise((resolve, reject) => {
			axios.get(`https://cuties.lilabrandon.fr/wallpaper/${pack != null ? pack : ""}`, {
				responseType: 'arraybuffer' // or 'blob' for browser compatibility
			})
			.then(response => {
				// Convert the image data to a base64 string
				const base64Image = Buffer.from(response.data, 'binary').toString('base64');
				resolve(`data:image/jpeg;base64,${base64Image}`);
			})
			.catch(error => {
				console.error('Error fetching the image:', error);
				reject(error);
			});
		});
		
	}
	
}
