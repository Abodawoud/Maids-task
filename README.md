# Maids

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Tree structure

```shell
|-- README.md
|-- angular.json
|-- package-lock.json
|-- package.json
|-- src
|   |               `-- app
|   |   |           `-- app-routing.module.ts
|   |   |           `-- app.component.css
|   |   |           `-- app.component.html
|   |   |           `-- app.component.ts
|   |   |           `-- app.module.ts
|   |   |           `-- core
|   |   |   |       `-- core.module.ts
|   |   |   |       `-- interceptor
|   |   |   |       `-- caching.interceptor.ts
|   |   |   |-- interfaces
|   |   |   |   |   `-- user.ts
|   |   |   |       `-- users.ts
|   |   |   `-- services
|   |   |           `-- users.service.ts
|   |   |-- modules
|   |   |   |-- store
|   |   |   |   |   `-- user.actions.ts
|   |   |   |   |   `-- user.effects.ts
|   |   |   |   |   `-- user.reducer.ts
|   |   |   |       `-- user.selectors.ts
|   |   |   |-- user-details
|   |   |   |   |   `-- components
|   |   |   |   |   `-- user
|   |   |   |   |       |-- user.component.css
|   |   |   |   |       |-- user.component.html
|   |   |   |   |       |-- user.component.ts
|   |   |   |   |       `-- users-card
|   |   |   |   |           |-- users-card.component.css
|   |   |   |   |           |-- users-card.component.html
|   |   |   |   |           `-- users-card.component.ts
|   |   |   |   |-- user-details-routing.module.ts
|   |   |   |   `-- user-details.module.ts
|   |   |   `-- user-list
|   |   |       |-- components
|   |   |       |   `-- users
|   |   |       |       |-- users-card
|   |   |       |       |   |-- users-card.component.css
|   |   |       |       |   |-- users-card.component.html
|   |   |       |       |   `-- users-card.component.ts
|   |   |       |       |-- users.component.css
|   |   |       |       |-- users.component.html
|   |   |       |       `-- users.component.ts
|   |   |       |-- user-list-routing.module.ts
|   |   |       `-- user-list.module.ts
|   |   `-- shared
|   |       |-- components
|   |       |   `-- header
|   |       |       |-- header.component.css
|   |       |       |-- header.component.html
|   |       |       `-- header.component.ts
|   |       `-- shared.module.ts
|   |-- assets
|   |   `-- maids.png
|   |-- environments
|   |   |-- environment.production.ts
|   |   `-- environment.ts
|   |-- favicon.ico
|   |-- index.html
|   |-- main.ts
|   `-- styles.css
|-- tailwind.config.js
|-- tsconfig.app.json
|-- tsconfig.json
`-- tsconfig.spec.json
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
