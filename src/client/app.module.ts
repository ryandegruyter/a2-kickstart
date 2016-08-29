import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {MyMaterialModule} from "./my-material/my-material-module";
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, MyMaterialModule],
    bootstrap: [AppComponent]
})
export class AppModule{

}