import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { CrudService } from '../../../services/crud.service';

@Component({
    selector: 'filters',
    templateUrl: './filters.component.html',
    providers: [CrudService]
})
export class FiltersComponent {

    @Input() countryOptions: any;
    currencyOptions: any
    rankOptions: any

    constructor(private crudService: CrudService) {
    }

    ngOnInit() {
        this.currencyOptions = [{ name: 'USD', label: 'USD', id: 0}, {name: 'AUD', label: 'AUD', id: 1}, {name: 'EURO', label: 'EURO', id: 2}];
        this.rankOptions = [{ name: 'Top', label: 'Top to bottom', id: 0}, { name: 'Bottom', label: 'bottom to top', id: 1}];
    }

}