import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
export interface InfoBoxData {
    title: string;
    description: string;
}
@Component({
    selector: 'my-infobox',
    template: `
        <md-card>
            <md-card-title>{{data.title}}</md-card-title>
            <md-card-content>
                {{data.description}}
            </md-card-content>
            <button md-button (click)="selected.emit(data.title)">Select</button>
        </md-card>
    `
})
export class MyInfoBox implements OnInit {
    private _data: InfoBoxData;
    @Input()
    public set data(v: InfoBoxData) {
        this._data = v;
    }

    public get data(): InfoBoxData {
        return this._data || {title: 'NO_TITLE', description: 'NO_DESCRIPTION'};
    }

    @Output()
    public selected: EventEmitter<string> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }
}