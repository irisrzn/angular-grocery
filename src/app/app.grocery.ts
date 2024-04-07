import { Component } from '@angular/core';

@Component({
    selector: 'app-grocery',
    templateUrl: './app.grocery.html',
    styleUrls: [
        '../assets/css/style.css'
    ]
})

export class GroceryComponent {
    item = {
        name: '',
        id: 0
    };
    items: { id: number; name: string; strike: boolean; editing?: boolean; }[] = [];

    onClick() {
        if (this.item.id == 0) {
            this.items.push({ id: (new Date()).getTime(), name: this.item.name, strike: false });
        }

        this.item.name = '';
    }

    onEdit(item: { id: number; name: string; strike: boolean; editing?: boolean }) {
        item.editing = true;
    }

    onSave(index: number) {
        this.items[index].editing = false;
    }

    onDelete(item: { id: number; name: string; strike: boolean; editing?: boolean }) {
        for (var i = 0; i < this.items.length; i++) {
            if (item.id == this.items[i].id) {
                this.items.splice(i, 1);
                break;
            }
        }
    }

    onStrike(item: { id: number; name: string; strike: boolean; editing?: boolean }) {
        for (var i = 0; i < this.items.length; i++) {
            if (item.id == this.items[i].id) {
                if (this.items[i].strike) {
                    this.items[i].strike = false;
                }
                else {
                    this.items[i].strike = true;
                }
                break;
            }
        }
    }
}