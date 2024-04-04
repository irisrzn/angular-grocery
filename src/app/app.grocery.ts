import { Component } from '@angular/core';

@Component({
    selector: 'app-grocery',
    templateUrl: './app.grocery.html'
})

export class GroceryComponent {
    task = {
        name: '',
        id: 0
    };
    tasks: { id: number; name: string; strike: boolean; editing?: boolean;  }[] = [];

    onClick() {
        if (this.task.id == 0) {
            this.tasks.push({ id: (new Date()).getTime(), name: this.task.name, strike: false });
        }
    }

    onEdit(task: { id: number; name: string; strike: boolean; editing?: boolean }) {
        task.editing = true;
    }
    
    onSave(index: number) {
        this.tasks[index].editing = false;
    }
    
}