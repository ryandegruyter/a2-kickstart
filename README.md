# Oefening 2: Feature modules & Dumb components

## Scenario

We gaan nu zelf een component schrijven.
Het word een simpele Material card met een titel en beschrijving.
De bedoeling is dat dit een dumb component wordt.
Een dumb component krijg zijn toestand/data enkel via Input properties.
Dit zorgt ervoor dat het component ontkoppeld is van de applicatie en makkelijk herbruikbaar wordt.

## Taken
### MyInfoBox Component

1. Maak een folder `my-material` in client
2. Maak een folder `my-material/components`
3. Maak hierin het domme component `MyInfoBox` aan.
4. Maak een interface MyInfoBox {
    title:string;
    description:string;
}
5. De component's publieke API bestaat uit:
    - __1 input__ : `data: MyInfoBox`
    - __1 output__: `selected: EventEmitter`
6. Gebruik onderstaande template om de view te maken.

Let op: je moet de correcte bindings nog toevoegen.
Vervang de HTML comments met de correcte bindings.
Voeg de event binding toe op de button click event.
``` html
<md-card>
    <md-card-title><!-- titel --></md-card-title>
        <md-card-content><!-- description --></md-card-content>
    <button md-button>Select</button>
</md-card>
```

### MyMaterialModule
1. Maak een nieuwe angular2 module `MyMaterialModule` in `my-material/`
2. Importeer de modules `MdCardModule` en `MdButtonModule`
3. Declareer en exporteer `MyInfoBox`
4. Importeer `MyMaterialModule` in de root module
5. Gebruik de selector van je nieuwe component als tag en bind de properties van `AppComponent`