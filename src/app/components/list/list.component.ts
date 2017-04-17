import { Component, OnInit, DoCheck } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { UtilityService } from '../../services/utility.service';
import { RichPerson } from '../../model/rich.person';
import { searchObject } from './../../model/search.object';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    providers: [CrudService, UtilityService]
})
export class ListComponent {

    richList: RichPerson[];
    allData: any;
    countryData: any = [{ name: '', label: '', id: 0}];

    filterForCountry: searchObject = {id: 0, label: '', name: '', origin: ''};
    filterForRank: searchObject = {id: 0, label: '', name: '', origin: ''};
    filterForSearch: searchObject = {id: 0, label: '', name: '', origin: ''};
    filterForCurrency: searchObject = {id: 0, label: 'USD', name: 'USD', origin: ''};

    constructor(private crudService: CrudService, private utilityService: UtilityService) {
    }

    ngOnInit() {
        this.crudService.getRichListData().subscribe(list => {
            this.allData = list;
            this.richList = list.celebrityList;
            let richArray: any[] = list.celebrityList.map((currenVal, index, array) => {
                return {
                    name: currenVal.country,
                    label: currenVal.country,
                    id: index
                }
            });
            this.countryData = this.utilityService.removeDuplicateObjectFromArray(richArray);
        });
    }

    sharedDataChange(object) {

        switch (object.origin) {
            case 'changeBirthFilter':
                this.filterForCountry = object;
            break;
            case 'changeRankFilter':
                this.filterForRank = object;
            break;
            case 'changeSearchFilter':
                this.filterForSearch = object;
            break;
            case 'changeCurrencyFilter':
                this.filterForCurrency = object;
            break;
        }
    }
}
