import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-filter',
	imports: [],
	templateUrl: './filter.component.html',
	styleUrl: './filter.component.css',
})
export class FilterComponent {
	@Output() selected_filter = new EventEmitter<string>();

	filter() {
		const select = (<HTMLSelectElement>document.getElementById("filter")).value;

		if (select == "All") {
			this.selected_filter.emit("all");
		} else if (select == "Completed") {
			this.selected_filter.emit("completed");
		} else if (select == "Incomplete") {
			this.selected_filter.emit("Incomplete")
		}
	}
}
