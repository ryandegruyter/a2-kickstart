import {NgModule} from '@angular/core';
import {MyInfoBox} from "./components/infobox.component";
import {MdButtonModule} from "@angular2-material/button";
import {MdCardModule} from "@angular2-material/card";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [CommonModule, MdButtonModule, MdCardModule],
    exports: [MyInfoBox],
    declarations: [MyInfoBox],
})
export class MyMaterialModule {
}
