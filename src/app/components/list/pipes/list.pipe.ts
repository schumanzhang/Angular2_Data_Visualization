import { Pipe, PipeTransform } from '@angular/core';
import { searchObject } from './../../../model/search.object';
import { RichPerson } from '../../../model/rich.person';

@Pipe({
    name: 'listFilter',
    pure: false,
})
export class listFilter implements PipeTransform {
    transform(items: any[], countryFilter: searchObject, rankFilter: searchObject, searchFilter: searchObject, currencyFilter: searchObject): any {
        let returnArray: RichPerson[] = items;
        if (!items || (!countryFilter && !rankFilter && !searchFilter && !currencyFilter)) {
            return items;
        }
        returnArray = this.convertCurrency(currencyFilter.name, items);
        returnArray = returnArray.filter(item => item.country.indexOf(countryFilter.name) !== -1);
        (rankFilter.id === 0) ? returnArray.sort((a, b) => { return a.rank - b.rank }) : returnArray.sort((a, b) => { return b.rank - a.rank });

        if (searchFilter.name === '') {
            return returnArray;
        } else {
            let searchedArray: RichPerson[] = [];
            returnArray.forEach((item) => {
                for (let key in item) {
                    if (key.indexOf(searchFilter.name) !== -1 || item[key].toString().indexOf(searchFilter.name) !== -1) {
                        if (searchedArray.indexOf(item) === -1){
                            searchedArray.push(item);
                        }
                    }
                }
            });
            return searchedArray;
        }
    }

    convertCurrency(currency, convertObject): RichPerson[] {
        let newConvertObject = JSON.parse(JSON.stringify(convertObject));
        switch (currency) {
            case 'AUD':
                newConvertObject.forEach((item) => {
                    item.netWorth = item.netWorth * 0.72
                });
            break;
            case 'EUR':
                newConvertObject.forEach((item) => {
                    item.netWorth = item.netWorth * 0.92
                });
            break;
            case 'USD':
            break;
        }
        return newConvertObject;
    }
}

