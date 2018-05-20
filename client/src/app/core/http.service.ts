import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';


const baseUrl = 'http://localhost:5000/';

const headers = new Headers({
    'Content-Type': 'application/json'
});
const requestOptions = new RequestOptions({
    headers: headers
});

@Injectable()
export class HttpService {
    constructor (private http: Http) { }

    post (url, data) {
        return this.http
            .post(`${baseUrl}${url}`, JSON.stringify(data), requestOptions)
            .toPromise()
            .then(resp => resp.json());
    }

    get (url) {
        return this.http
            .get(`${baseUrl}${url}`)
            .toPromise()
            .then(resp => resp.json());
    }

    authPost (url, data, token) {
        const authHeaders = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
        });
        const authrequestOptions = new RequestOptions({
            headers: authHeaders
        });
        return this.http
            .post(`${baseUrl}${url}`, JSON.stringify(data), authrequestOptions)
            .toPromise()
            .then(resp => resp.json());
    }

    authGet (url, token) {
        const authHeaders = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
        });
        const authrequestOptions = new RequestOptions({
            headers: authHeaders
        });
        return this.http
            .get(`${baseUrl}${url}`, authrequestOptions)
            .toPromise()
            .then(resp => resp.json());
    }
}
