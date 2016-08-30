import {Component, OnInit, Provider} from '@angular/core';
import {InfoBoxData} from "./my-material/components/infobox.component";
import {WordsService} from "./words-service";
import {WordsHttpService} from "./words-http-service";
import {Observable} from "rxjs";
@Component({
    selector: `my-app`,
    template: `
    <h1>Hello world</h1>
    <my-infobox *ngFor="let wordInfo of (words | async)" [data]="wordInfo" (selected)="onSelected($event)"></my-infobox>
    `,
    providers: [WordsHttpService],
    styles: [`
        h1{
            color:red;
        }
    `]
})
export class AppComponent implements OnInit {
    public words: any;

    public onSelected = (title: string)=> {
        alert(title);
    };

    constructor(private wordsService: WordsHttpService) {
        this.words = wordsService.wordsList;
    }

    ngOnInit(): void {}
}