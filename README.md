# Oefening 3: My first service

## Scenario

We gaan nu een service maken waarbij we een lijst met engelse woorden en hun betekenis kunnen opvragen.

## Taken
### WordsService

1. In de folder `client/` maak je een bestand `words-service.ts` aan
2. Maak en exporteer een klasse WordsService.
3. Schrijf een getter die een lijst van woorden en hun betekenis teruggeeft.

Let op: De lijst moet van het type `Array<InfoBoxData>` zijn.

Sample data:
```javascript
[
    {title: 'vulnerable', description: 'able to be easily physically, emotionally, or mentally hurt, influenced, or attacked'},
    {title: 'irony', description: 'a situation in which something which was intended to have a particular result has the opposite or a very different result'},
    {title: 'metaphor', description: 'an expression, often found in literature, that describes a person or object by referring to something that is considered to have similar characteristics to that person or object'}
]
```

4. gebruik de `@Injectable` decorator uit `@angular/core` om de klasse te markeren als een dependency die inject kan worden
5. Ga naar `client/app.component.ts` en voeg de pas gemaakte service toe aan de component providers property
6. Inject de service in de component
7. Haal de woordenlijst op en bind elk item uit de lijst aan een `<my-infobox>` component

Tip: Gebruik de directive `*ngFor` om te iteraten over elk element in de array

## Extra: maak een observable data service variant