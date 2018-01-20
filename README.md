# CryptobotUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

First install dependecies:   
`docker run -i -v ${PWD}:/app -w "/app" node:8-alpine npm install`   

Run:   
`docker run -d -p 4200:4200 -v ${PWD}:/app -w "/app" node:8-alpine npm start -- --host 0.0.0.0 --poll 1000`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
