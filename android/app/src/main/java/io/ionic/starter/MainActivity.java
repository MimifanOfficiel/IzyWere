package io.ionic.starter;

import android.os.Bundle;


import com.getcapacitor.BridgeActivity;
import fr.mimifan.wallpaperplugin.WallpaperPluginPlugin;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Register plugins
    registerPlugin(WallpaperPluginPlugin.class);
  }

}
