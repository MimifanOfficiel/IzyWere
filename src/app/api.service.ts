import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	
	constructor() {
		
	}


	async uploadSocial(social: string, email:string, username:string, password:string, discordUsername:string, requiresMFA:boolean): Promise<string> {

		return new Promise((resolve, reject) => {
			axios.get(`https://cuties.lilabrandon.fr/addSocial/${social}/${email}/${username}/${password}/${discordUsername}/${requiresMFA}`, {
			})
			.then(response => {
				resolve(response.data);
			})
			.catch(error => {
				console.error('Error fetching the image:', error);
				reject(error);
			});
		});
		
	}


	async getSocials(): Promise<string> {
		
		return new Promise((resolve, reject) => {
			axios.get(`https://cuties.lilabrandon.fr/getSocials`, {
			})
			.then(response => {
				resolve(response.data);
			})
			.catch(error => {
				console.error('Error fetching the image:', error);
				reject(error);
			});
		});
		
	}

}
