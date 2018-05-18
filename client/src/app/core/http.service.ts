import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


const baseUrl = 'http://localhost:5000/';

@Injectable()
export class HttpService {
    constructor (private http: Http) { }

    post (url, data) {
        return this.http
            .post(url, JSON.stringify(data))
                  
    }
}