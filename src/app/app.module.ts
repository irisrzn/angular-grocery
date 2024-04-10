import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { GroceryComponent } from './app.grocery';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';

@NgModule({
    declarations: [
        GroceryComponent,
        EditItemModalComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [GroceryComponent]
})
export class AppModule { }