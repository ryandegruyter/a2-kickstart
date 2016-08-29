import {Component, OnInit} from '@angular/core';
import {InfoBoxData} from "./my-material/components/infobox.component";
import {WordsService} from "./words-service";
@Component({
    selector: `my-app`,
    template: `
    <h1>Hello world</h1>
    <my-infobox *ngFor="let wordInfo of words" [data]="wordInfo" (selected)="onSelected($event)"></my-infobox>
    `,
    providers: [WordsService],
    styles: [`
        h1{
            color:red;
        }
    `]
})
export class AppComponent implements OnInit {
    public words: Array<InfoBoxData>;

    public onSelected = (title: string)=> {
        alert(title);
    };

    constructor(private wordsService: WordsService) {
        this.words = wordsService.wordsList;
    }

    ngOnInit(): void {}
}