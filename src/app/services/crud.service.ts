import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CrudService {

    constructor(private http: Http) {
    }

    getRichListData() {
        return this.http.get('assets/celebrityRichList.json')
            .map(res => res.json());
    }
}