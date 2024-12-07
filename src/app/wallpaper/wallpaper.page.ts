import { Component, OnInit } from '@angular/core';
import { WallpaperPlugin} from 'wallpaperplugin/src';
import { WallpaperPluginPlugin } from 'wallpaperplugin/src';

@Component({
	selector: 'app-wallpaper',
	templateUrl: './wallpaper.page.html',
	styleUrls: ['./wallpaper.page.scss'],
})
export class WallpaperPage implements OnInit {
	
	constructor() { }
	
	ngOnInit() {
	}
	
	async changeWallpaper() {
		try {
			await WallpaperPlugin.setWallpaper({ filePath: "https://cuties.vps.boxtoplay.com/wallpaper" });
			console.log("Wallpaper changed successfully");
		} catch (error) {
			console.error("Error setting wallpaper:", error);
		}
	}
	
}
