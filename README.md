
# Situm React Native Wayfinding Getting

## Table of contents

  

1. [Introduction](#introduction)

2. [Setup](#setup)

3. [Samples](#samples)

4. [Run Android version](#run-android-version)

5. [Run iOS version](#run-ios-version)
  

# Introduction

  

Situm Wayfinding Module has been designed to create indoor location applications in the simplest way. It has been built in the top of the Situm SDK and its functionalities has been widely tested. If you are interested in building applications using the Situm SDK, please refer to [Situm React Native SDK Sample app](https://github.com/situmtech/situm-react-native-getting-started).

  

With the samples app you will be able to:

1. Load a Situm Map with a selected building of your account and start the positioning using the MapView object.

2. Set listeners to receive notifications about user locations, buildings, POIs and routes.

# Requirements

## Set up the Situm Account

Before running this application you must set up an account in the [Situm Dashboard](https://dashboard.situm.com), configure a building and retrieve an API Key.

1. Go to the [sign in form](https://dashboard.situm.com) and enter your username and password to sign in.
2. Go to the [account section](https://dashboard.situm.com/accounts/profile) and on API Key section clicl on 'Generate new API Key'.
3. Go to the [buildings section](https://dashboard.situm.com/buildings) and create a building.
4. Donwload [Situm Mapping Tool](https://play.google.com/store/apps/details?id=es.situm.maps&hl=es&gl=US) in Play Store (only Android devices) and calibrate your building. Check the user guide for detail1ed information.
5. Check this [guide](https://developers.google.com/maps/documentation/android-sdk/get-api-key) to get your own Google api key.

You must keep in mind that you will need the user email, the api key, a Google API key for maps and the building ID.

# Setup

## Step 0: install React Native

This getting started needs React Native in order to properly work. If you don't have React Native and don't know how to set it up please refer to the **React Native CLI Quickstart** [documentation](https://reactnative.dev/docs/environment-setup). Getting Started uses React Native ```version 0.69.3``` or higher.
  

## Step 1: install dependencies

You need to install the [@situm/react-native-wayfinding](https://www.npmjs.com/package/@situm/react-native-wayfinding). In the root directory you will need to execute the following code:

```
$ yarn install
```

or

```
$ npm install
```

This will download all the requested dependencies in the package.json.

Go to the `/ios` folder and run the following code:
```
$ pod install
```
This will download the correct pods to run the application in IOS.

## Step 2: configure the project

**This step is already completed in the Getting Started. Don't forget to change the value with your own API key from Google.** 

### Android
You will need to add to the `manifest.xml` the following code:
```
<?xml ...>
<manifest ...>
  <application
  ...>

    <meta-data
        android:name="com.google.android.geo.API_KEY"
        android:value="GOOGLE_API_KEY_HERE" />

    ...
    <activity ...></activity>
  </application>
</manifest>
```


### IOS
Permissions are requested to use the Wayfinding. Add the following permissions in the `config.plis`.
- NSLocationAlwaysAndWhenInUsageDescription.
- NSBluetoothAlwaysUsageDescription.

## Step 3: setup the credentials
In the config.js file under the `./app/src` folder, change the following code with your own credentials of situm.
```
export  const  SITUM_USER = 'SITUM_USER_HERE';
export  const  SITUM_API_KEY = 'SITUM_API_KEY_HERE';
export  const  BUILDING_ID = 'SITUM_BUILDING_ID_HERE';
export  const  GOOGLE_API_KEY = 'GOOGLE_API_KEY_HERE';
```
## Samples

We have created some samples that show different use cases of this plugin.

1. [SimpleMapView](src/app/screens/SimpleMapScreen/index.tsx): use the wayfinding in the selected building. You can init the position, select POIs and calculate directions.

## Run Android version

-   **Run from command line:**  `$ npx react-native run-android`. If it doesn't open you a Metro terminal, just execute `$ npx react-native start` previously to the other command.
-   **Run from Android Studio:**  Open  `root/android`  folder in Android Studio and run project. It is possible that you will have to execute `$ npx react-native start` to start the metro terminal. If you are using a physical device, use `$ adb reverse tcp:8081 tcp:8081` to configure the ports correctly so that metro is connected to that device.

## Run iOS version

-   **Run from command line:**  `$ npx react-native run-ios`. Again, if it doesn't open you a Metro terminal, just execute `$ npx react-native start` previously to the other command.
-   **Run from XCode:**  Go to  `root/ios`  folder and open  `SitumRNGettingStarted.xcworkspace`  or run command  `xed ios`  from root directory.

## Support information

For any question or bug report, please send an email to <support@situm.es>.