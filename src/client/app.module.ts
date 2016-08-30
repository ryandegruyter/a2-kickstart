import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {MyMaterialModule} from "./my-material/my-material-module";
import {HttpModule} from "@angular/http";
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, MyMaterialModule, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule{

}