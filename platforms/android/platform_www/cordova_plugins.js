cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-app-version.AppVersionPlugin",
      "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
      "pluginId": "cordova-plugin-app-version",
      "clobbers": [
        "cordova.getAppVersion"
      ]
    },
    {
      "id": "cordova-plugin-badge.Badge",
      "file": "plugins/cordova-plugin-badge/www/badge.js",
      "pluginId": "cordova-plugin-badge",
      "clobbers": [
        "cordova.plugins.notification.badge"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "phonegap-plugin-push.PushNotification",
      "file": "plugins/phonegap-plugin-push/www/push.js",
      "pluginId": "phonegap-plugin-push",
      "clobbers": [
        "PushNotification"
      ]
    },
    {
      "id": "cordova-plugin-customurlscheme.LaunchMyApp",
      "file": "plugins/cordova-plugin-customurlscheme/www/android/LaunchMyApp.js",
      "pluginId": "cordova-plugin-customurlscheme",
      "clobbers": [
        "window.plugins.launchmyapp"
      ]
    },
    {
      "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
      "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
      "pluginId": "cordova-plugin-facebook4",
      "clobbers": [
        "facebookConnectPlugin"
      ]
    },
    {
      "id": "com.kochava.sdk.KochavaTracker",
      "file": "plugins/com.kochava.sdk/www/KochavaTracker.js",
      "pluginId": "com.kochava.sdk",
      "clobbers": [
        "KochavaTracker"
      ]
    },
    {
      "id": "cordova-plugin-universal-link.universalLinks",
      "file": "plugins/cordova-plugin-universal-link/www/universal_links.js",
      "pluginId": "cordova-plugin-universal-link",
      "clobbers": [
        "universalLinks"
      ]
    },
    {
      "id": "segment-cordova-plugin.SegmentCordovaPlugin",
      "file": "plugins/segment-cordova-plugin/www/SegmentCordovaPlugin.js",
      "pluginId": "segment-cordova-plugin",
      "clobbers": [
        "Segment"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-app-version": "0.1.9",
    "cordova-plugin-badge": "0.8.8",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-support-google-services": "1.3.2",
    "phonegap-plugin-multidex": "1.0.0",
    "phonegap-plugin-push": "2.3.0",
    "cordova-plugin-customurlscheme": "5.0.2",
    "cordova-plugin-facebook4": "6.4.0",
    "com.kochava.sdk": "2.2.0",
    "cordova-plugin-universal-link": "1.2.4",
    "cordova-plugin-androidx": "2.0.0",
    "cordova-plugin-androidx-adapter": "1.1.1",
    "segment-cordova-plugin": "4.0.0"
  };
});