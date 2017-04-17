import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { searchObject } from './../../../model/search.object';

@Component({
    selector: 'filters',
    templateUrl: './filters.component.html'
})
export class FiltersComponent {

    @Input() countryOptions: any;
    @Output() dropdownFilterChange = new EventEmitter();
    currencyOptions: any;
    rankOptions: any;

    constructor() {
    }

    ngOnInit() {
        this.currencyOptions = [{ name: 'USD', label: 'USD', id: 0}, {name: 'AUD', label: 'AUD', id: 1}, {name: 'EUR', label: 'EUR', id: 2}];
        this.rankOptions = [{ name: 'Top', label: 'Top to bottom', id: 0}, { name: 'Bottom', label: 'Bottom to top', id: 1}];
    }

    changeBirthFilter(newVal) {
        newVal.origin = 'changeBirthFilter';
        this.dropdownFilterChange.emit(newVal);
    }

    changeRankFilter(newVal) {
        newVal.origin = 'changeRankFilter';
        this.dropdownFilterChange.emit(newVal);
    }

    changeCurrencyFilter(newVal) {
        newVal.origin = 'changeCurrencyFilter';
        this.dropdownFilterChange.emit(newVal);
    }

    changeSearchFilter(newVal) {
        let sendObject: searchObject = {id: 0, label: '', name: '', origin: ''};
        sendObject.origin = 'changeSearchFilter';
        sendObject.id = 0;
        sendObject.label = newVal;
        sendObject.name = newVal;
        this.dropdownFilterChange.emit(sendObject);
    }

}