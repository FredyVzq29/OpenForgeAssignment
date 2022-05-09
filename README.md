
# OpenForgeAssignment

App developed by FredyVzq. Builded in IONIC and deployed in Android and IOS devices.

## Installation

Clone the repo on your folder and execute this commands to run.

```bash
  npm -i --force
  ionic serve
```

### Install in Android
```bash
  ionic cap add android
  ionic capacitor build android 
```


### Install in iOS

I have found two ways to do the process.  
1.-
  ```bash
    ionic cap add ios
    ionic cap build ios
  ```
2.-
  ```bash
    npm install @capacitor/ios
    npx cap add ios
    ionic cap build ios
  ```
### In both cases
At this point check if Xcode or Android Studio can open the project automatically and do not throw any errors.
If you have images for icon and splash screen, execute the following command.

```bash
  npm run resources
```
## Author

- [@fredyvzq29](https://www.github.com/FredyVzq29)

