# OpenForgeAssignment
App developed by FredyVzq. Builded in IONIC and deployed in Android and IOS devices.


## How to build in Android

```bash
  npm i --force
  ionic cap add android
  ionic capacitor build android
```
Here is necessary check if Android Studio can load all the resources, if everything is ok (and if you have images for icons and splash screen), close the editor and run this command

```
npm run resources
```

Open the editor again and install the app in a device.

## How to build in IOS

```bash
  npm i --force
```

Here we have two ways to complete.
```bash
    ionic cap add ios
```
Or
```bash
    npm install @capacitor/ios
    npx cap add ios
```

Continue with this ...

```bash
    ionic cap build ios
    npm run resources //If you have images for icon and splash screen
```
