import {Component, OnInit} from '@angular/core';
import {InfoBoxData} from "./my-material/components/infobox.component";
@Component({
    selector: `my-app`,
    template: `
    <h1>Hello world</h1>
    <h2><!-- naam voornaam --></h2>
    <my-infobox [data]="wordInfo" (selected)="onSelected($event)"></my-infobox>
    <svg width="600" height="510">
        <rect width="50" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
    </svg>
    `,
    styles: [`
        h1{
            color:red;
        }
        .make-pink{
            background-color: pink;
        }
    `]
})
export class AppComponent implements OnInit {
    wordInfo: InfoBoxData;
    isPink: boolean = true;

    xPos:number = 40;
    yPos: number= 50;

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