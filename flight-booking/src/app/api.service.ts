import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
// import { environment } from "../environment/environment";

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    
    constructor(private http: HttpClient) {}
    // private url: string = environment.apiUrl;

    getData(endpoint: string) {
        return this.http.get(`api/${endpoint}`)
    }

    postData(endpoint: string, data: any) {
        return this.http.post(`api/${endpoint}`, data);
    }
}