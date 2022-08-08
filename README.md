
# Situm React Native Wayfinding Getting

## Table of contents

  

### [Introduction](#introduction)

### [Setup](#setup)

0. [Step 0: install React Native](#step-0-install-react-native)
1. [Step 1: install dependencies](#step-1-install-dependencies)
2. [Step 2: configure the project](#step-2-configure-the-project)
3. [Step 3: setup the credentials](#step-3-setup-the-credentials)

### [Samples](#samples)

### [Run Android version](#run-android-version)

### [Run iOS version](#run-ios-version)
  

# Introduction

  

Situm Wayfinding Module has been designed to create indoor location applications in the simplest way. It has been built in the top of the Situm SDK and its functionalities has been widely tested. If you are interested in building applications using the Situm SDK, please refer to [Situm React Native SDK Sample app](https://github.com/situmtech/situm-react-native-getting-started).

  

With the samples app you will be able to:

1. Load a Situm Map with a selected building of your account and start the positioning using the MapView object.

2. Set listeners to receive notifications about user locations, buildings, POIs and routes.

  

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

-   **Run from command line:**  `$ react-native run-android`
-   **Run from Android Studio:**  Open  `root/android`  folder in Android Studio and run project.

## Run iOS version

-   **Run from command line:**  `$ react-native run-ios`
-   **Run from XCode:**  Go to  `root/ios`  folder and open  `SitumRNGettingStarted.xcworkspace`  or run command  `xed ios`  from root directory.

## Support information

For any question or bug report, please send an email to <support@situm.es>.