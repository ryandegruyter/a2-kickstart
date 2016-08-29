import {Component, OnInit} from '@angular/core';
@Component({
    selector: `my-app`,
    template: `
    <h1>Hello world</h1>
    `,
    styles: [`
        h1{
            color:red;
        }
    `]
})
export class AppComponent implements OnInit {
    // public wordInfo: InfoBoxData;
    //
    // public onSelected = (title: string) => {
    //     alert(title);
    // };

    ngOnInit(): void {
        // this.wordInfo = {
        //     title: 'Metaphor',
        //     description: 'an expression, often found in literature, that describes a person or object by referring to something that is considered to have similar characteristics to that person or object'
        // };
    }
}