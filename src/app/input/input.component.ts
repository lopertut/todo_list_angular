import { Component } from '@angular/core';

@Component({
	selector: 'app-input',
	imports: [],
	templateUrl: './input.component.html',
	styleUrl: './input.component.css',
})
export class InputComponent {

	add_task() {
		const task = (<HTMLInputElement>document.getElementById("input")).value;
		localStorage.setItem(task, "incomplete");
	}
}
