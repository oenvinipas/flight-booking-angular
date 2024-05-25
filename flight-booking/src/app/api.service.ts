import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    
    constructor(private http: HttpClient) {}

    getData(endpoint: string) {
        return this.http.get(`/api/${endpoint}`)
    }

    postData(endpoint: string, data: any) {
        return this.http.post(`/api/${endpoint}`, data);
    }
}