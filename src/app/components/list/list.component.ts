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

    constructor(private crudService: CrudService) {

    }

    ngOnInit() {
        this.crudService.getRichListData().subscribe(list => {
            this.richList = list.celebrityList;
            console.log('richList:', this.richList);
        });
    }

    

    
}