import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';

@Injectable()
export class CarsService {

    constructor (private httpService: HttpService) { }

    carAdd (car, token) {
        return this.httpService.authPost('cars/create', car, token);
    }

    getAll (url) {
        return this.httpService.get(url);
    }

    getCar (url, token) {
        return this.httpService.authGet(url, token);
    }

    post (url, data, token) {
        return this.httpService.authPost(url, data, token);
    }
}
