import { Component, Input, OnChanges } from '@angular/core';

@Component({
	selector: 'app-list',
	imports: [],
	templateUrl: './list.component.html',
	styleUrl: './list.component.css',
})
export class ListComponent{
	tasks = Object.keys(localStorage);
	localstorage = localStorage;
	
	@Input() update: boolean = false; 

	ngOnChanges() {
		this.tasks = Object.keys(this.localstorage);
	}

	changeStatus(task: string) {
		const checkBox = (<HTMLInputElement>document.getElementById("change"));

		if (checkBox.checked) {
			this.localstorage.setItem(task, "complete");
		} else {
			this.localstorage.setItem(task, "incomplete");
		}
	}
}