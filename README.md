# Oefening 1: Angular2 Bootstrap

## Scenario

## Root component
In `src/client/app-component.ts` vind je:

```
import {Component} from '@angular/core';
```
### Taken

1. Maak een klasse `AppComponent` en exporteer het component met `export`
2. Decorate `AppComponent` met de `@Component()` decorator
3. Geef het component een selector (e.g. `my-app`)
5. Definieer een template dat de titel "Hello World" toont
6. Zorg dat de text rood gekleurd wordt mbhv de `styles` metadata property
7. Gebruik de selector als een tag in `src/index.html`

## Root module
In `src/client/app-module.ts` vind je de import statements:

```
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
```

### Taken

1. Maak een klasse `AppModule` en exporteer de module met `export`
2. Decoreer `AppModule` met de `@NgModule()` decorator
3. Declareer `AppComponent` in de `declarations` property
5. Declareer `AppComponent` in de `bootstrap` property

## JIT Dynamic Bootstrap
In `src/main.browser.ts` vind je:

```
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from "./client/app.module";
```

1. Bootstrap `AppModule` mbhv `platformBrowserDynamic()`
