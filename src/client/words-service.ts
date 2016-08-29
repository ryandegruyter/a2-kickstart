import { Injectable } from '@angular/core';
import {InfoBoxData} from "./my-material/components/infobox.component";

@Injectable()
export class WordsService {
    private _words: Array<InfoBoxData>;

    constructor() {
        this._words = [
            {title: 'vulnerable', description: 'able to be easily physically, emotionally, or mentally hurt, influenced, or attacked'},
            {title: 'irony', description: 'a situation in which something which was intended to have a particular result has the opposite or a very different result:'},
            {title: 'metaphor', description: 'an expression, often found in literature, that describes a person or object by referring to something that is considered to have similar characteristics to that person or object'}
        ];
    }

    public get wordsList():Array<InfoBoxData>{
        return this._words;
    }
}