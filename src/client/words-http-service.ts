import {Injectable, OnInit} from '@angular/core';
import {WordsService} from "./words-service";
import {InfoBoxData} from "./my-material/components/infobox.component";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
@Injectable()
export class WordsHttpService {

    constructor(private http: Http) {
    }

    public get wordsList(): Observable<InfoBoxData> {
        return this.http.get('http://localhost:3004/words')
            .map((response: Response)=> {
                return response.json();
            });
    }
}