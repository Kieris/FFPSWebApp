# FFPSWebApp

This is an Angular frontend for a website that interacts with the MariaDB database used for private FFXI servers to show stats similar to that of a Wiki, but the data is automatic and are guaranteed to be accurate. The original database used was based on the Wings version, but I have confirmed the API queries work with the Wings database from Feb 2023. The calculations might (not many of these were needed but future features could change that) have changed for certain things in the newer Wings code. I intend to eventually set up a demo site to show this. 

To change the API path or the path to images, change the appropriate files in the environments folder. The path to item icons in item-icon.component.html can also be changed to use to ffxiah icons if desired.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3 and later updated to Angular 13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
