import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

    constructor() {

    }

    removeDuplicateObjectFromArray(searchArray: any[]): any {
        let filteredArray: any[] = searchArray.filter((currentItem, index) => {
            let counter: number = 0;
            for (let i = 0; i < index + 1; i++) {
                if (searchArray[i].name === currentItem.name) {
                    counter++;
                }                
            }
            if (counter === 1) {
                return true;
            }
        });
        return filteredArray;
    }

}