package fr.mimifan.wallpaperplugin;

import android.app.WallpaperManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Log;
import android.content.Context;

public class WallpaperPlugin {
    private Context context;

    public WallpaperPlugin(Context context) {
        this.context = context;
    }

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }

    public void setWallpaper(String filePath) throws Exception {
        WallpaperManager wallpaperManager = WallpaperManager.getInstance(context);
        Bitmap bitmap = BitmapFactory.decodeFile(filePath);
        wallpaperManager.setBitmap(bitmap);
    }
}
