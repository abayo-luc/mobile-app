[![Code Climate](https://codeclimate.com/github/SpamExperts/mobile-app/badges/gpa.svg)](https://codeclimate.com/github/SpamExperts/mobile-app) [![Issue Count](https://codeclimate.com/github/SpamExperts/mobile-app/badges/issue_count.svg)](https://codeclimate.com/github/SpamExperts/mobile-app)

# ![](img/se_logo.png) SpamExperts mobile app

### Steps to build the app:

- install Android SDK for Android platform and XCode for iOS
- make sure you installed [Node.js](http://nodejs.org/)
- install Cordova `$ sudo npm install -g cordova`
- install Ionic `$ sudo npm install -g ionic`
- run the following command in a terminal
```bash
$ wget https://raw.githubusercontent.com/SpamExperts/mobile-app/master/src/scripts/buildApp.sh 
$ bash buildApp.sh -p <android | ios> [-s path_to_keystore_file] [-v new_build_no] [-t path_to_local_template] [-d (debug when signed)] [-h (help)]
```
- install `spamexperts_app.apk` on your Android device.
- To build for iOS open SpamExpertsQuarantine.xcodeproj with XCode and use the `Automatic provisioning` to sign and build the app.

### For development:
- open a terminal and run the following command:
```bash
$ wget https://raw.githubusercontent.com/SpamExperts/mobile-app/master/src/scripts/appDev.sh && bash appDev.sh <android | ios> <proxy_server>
$ # appDev.sh <android | ios> <proxy_server>
```
- open `spamexperts_mobile_app` project folder with your IDE and register the VCS root
- run `$ ionic serve` from your command line to open the local server

When working in the development mode a [service proxy](http://ionicframework.com/docs/cli/test.html) has to be setup in order to prevent the `No 'Access-Control-Allow-Origin' header is present on the requested resource` error.
There are two gulp tasks that switch this service proxy on and off.
```bash
$ gulp add-proxy --server <proxy_server>
$ gulp remove-proxy
```

On iOS you may need to grant permissions to `.npm` and `.config` before running the build or dev script
```bash
$ sudo chown -R $USER:$GROUP ~/.npm
$ sudo chown -R $USER:$GROUP ~/.config
```

For more information visit the [Ionic documentation page](http://ionicframework.com/docs/guide/) .
