import { Component } from '@angular/core';

@Component({
	selector: 'app-list',
	imports: [],
	templateUrl: './list.component.html',
	styleUrl: './list.component.css',
})
export class ListComponent {
	tasks = Object.keys(localStorage);
	localstorage = localStorage;
	filter: string = "";

	GetData(selected_filter: string) {
		this.filter = selected_filter;
		console.log(this.filter);
	}
}
