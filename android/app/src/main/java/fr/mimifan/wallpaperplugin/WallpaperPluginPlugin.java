package fr.mimifan.wallpaperplugin;
import android.app.WallpaperManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.content.Context;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@CapacitorPlugin(name = "WallpaperPlugin")
public class WallpaperPluginPlugin extends Plugin {

    @PluginMethod
    public void setWallpaper(PluginCall call) {
        String filePath = call.getString("filePath");

        if (filePath == null) {
            call.reject("File path is required");
            return;
        }

        Context context = getContext();
        WallpaperManager wallpaperManager = WallpaperManager.getInstance(context);

        try {
            Bitmap bitmap = BitmapFactory.decodeFile(filePath);
            wallpaperManager.setBitmap(bitmap);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to set wallpaper", e);
        }
    }
}
