import { Component } from '@angular/core';

@Component({
    selector: 'app-grocery',
    templateUrl: './app.grocery.html'
})

export class GroceryComponent {
    task: string = '';
    tasks: { name: string;}[] = [];

    onClick() {
        this.tasks.push({ name: this.task});
        this.task = '';
    }
}