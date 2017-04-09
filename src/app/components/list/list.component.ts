import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { RichPerson } from '../../model/rich.person';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    providers: [CrudService]
})
export class ListComponent {

    richList: RichPerson[];
    allData: any;
    countryData: any = [{ name: '', label: '', id: 0}];

    constructor(private crudService: CrudService) {

    }

    ngOnInit() {
        this.crudService.getRichListData().subscribe(list => {
            this.allData = list;
            this.richList = list.celebrityList;
            console.log('richList:', this.richList);
            this.countryData = list.celebrityList.map((currenVal, index, array) => {
                return {
                    name: currenVal.country,
                    label: currenVal.country,
                    id: index
                }
            });
            console.log('countryOptions:', this.countryData);
        });
    }

    
}