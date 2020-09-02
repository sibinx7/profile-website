# Profile Website 

1. [Installation](#installation)
2. [Setup](#setup)
3. [Run](#run)
4. [Deployment](#deployment)

<h2 id="installation">Installation</h2> 

- Install **NodeJS**, **Yarn**, **Bower**, **Angular-Cli**, **TypeScript**


<h2 id="setup">Setup</h2> 

- Run `yarn install` from root directory 
- Set Environment variables, api urls in `src/environments/environments.ts` file 
- Add additional Javascript/jQuery plugins in `.angular-cli.json` file 

<h2 id='circle-ci'>Circle CL</h2>

CircleCI integrated with application. All configuration can be found in `.circleci` folder. Automatic heroku deployment added to 	**CircleCI**, issues may be there with **Heroku**, it will solve later..

<h2 id="run">Run</h2>

- Run `ng serve`

package.json
```
  "scripts": {
    "ng": "ng",
    "start": "ng serve --port=9000",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  }
  ```

  angular.json
  ```
       "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "sibin-profile:build",
            "port": 7200
          },
          "configurations": {
            "production": {
              "browserTarget": "sibin-profile:build:production"
            }
          }
        }
```        