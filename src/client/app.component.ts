import {Component, OnInit} from '@angular/core';
import {InfoBoxData} from "./my-material/components/infobox.component";
@Component({
    selector: `my-app`,
    template: `
    <h1>Hello world</h1>
    <my-infobox [data]="wordInfo" (selected)="onSelected($event)"></my-infobox>
    `,
    styles: [`
        h1{
            color:red;
        }
    `]
})
export class AppComponent implements OnInit {
    private wordInfo: InfoBoxData;
    public onSelected = (title: string)=> {
        alert(title);
    };

    ngOnInit(): void {
        this.wordInfo = {
            title: 'Metaphor',
            description: 'an expression, often found in literature, that describes a person or object by referring to something that is considered to have similar characteristics to that person or object'
        };
    }
}