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
        id: 0,
        name: '',
        quantity: 1,
        measurement: 'pcs',
        bought: false,
        editing: false
    };
    
    items: { id: number; name: string; quantity: number; measurement: string; bought: boolean; editing: boolean; }[] = [];

    onClick() {
        if (this.item.id == 0) {
            this.items.push({ 
                id: (new Date()).getTime(), 
                name: this.item.name, 
                quantity: this.item.quantity, 
                measurement: this.item.measurement,
                bought: false, 
                editing: false 
            });
        }

        this.item.name = '';
        this.item.quantity = 1;
        this.item.measurement = 'pcs';
    }

    onEdit(item: { id: number; name: string; quantity: number; measurement: string; bought: boolean; editing: boolean; }) {
        item.editing = true;
    }

    onSave(index: number) {
        this.items[index].editing = false;
    }

    onDelete(item: { id: number; name: string; quantity: number; measurement: string; bought: boolean; editing: boolean; }) {
        for (var i = 0; i < this.items.length; i++) {
            if (item.id == this.items[i].id) {
                this.items.splice(i, 1);
                break;
            }
        }
    }

    onBought(item: { id: number; name: string; bought: boolean; editing?: boolean }) {
        for (var i = 0; i < this.items.length; i++) {
            if (item.id == this.items[i].id) {
                if (this.items[i].bought) {
                    this.items[i].bought = false;
                }
                else {
                    this.items[i].bought = true;
                }
                break;
            }
        }
    }
}