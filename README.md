# Web Site Chrome App Generat

## How to use this project to build a new chrome App

1. Download this source code
2. Change the app `name` and `version` in `src/manifest.json`

	```
		{
		  "manifest_version": 2,
		  "name": "example",
		  "version": "2.1",
		  "minimum_chrome_version": "23",
		  "icons": {
		    "16": "image/icon_16.png",
		    "128": "image/icon_128.png"
		  },
		  "app": {
		    "background": {
		      "scripts": ["js/background.js"]
		    }
		  },
		   "permissions": [
		    "webview"
		  ]
		}
	```

3. Replace the app icon with yours in the image folder
4. Set your web site info in `src/html/index.html`

	```
		<webview id="example-id" partition="persist:your_code" src='https://your-web-size.com' allowtransparency="on" autosize="on" >
	```

5. Package your app

	[Chrome Official Tutorial](https://developer.chrome.com/extensions/packaging)