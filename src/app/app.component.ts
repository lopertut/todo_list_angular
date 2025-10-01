import { Component } from '@angular/core';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { FilterComponent } from './filter/filter.component';

@Component({
	selector: 'app-root',
	imports: [InputComponent, ListComponent, FilterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {

}
