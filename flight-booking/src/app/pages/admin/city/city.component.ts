import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit {
  apiKey: string = "https://freeapi.gerasim.in/api/FlightBooking";
  cityList: any [] = [];
  constructor(private http: HttpClient) {}

  // On page load, cityList should be populated with cities
  ngOnInit(): void {
    this.getAlLCity();
  }

  getAlLCity() {
    this.http.get(`${this.apiKey}/GetAllCity`).subscribe((res: any) => {
      this.cityList = res.data;
    })
  }

  // bulkUpdateCity() {
  //   this.http.post("https://freeapi.gerasim.in/api/FlightBooking/AddUpdateBulkCity", this.cityList).subscribe((res: any) => {
  //     if (res.result) {
  //       alert("Bulk Update Success")
  //     } else {
  //       alert(res.message)
  //     }
  //   })
  // }

  addNew() {
    const obj = {
      cityId: 0,
      cityName: ""
    }
    this.cityList.unshift(obj);
  }
}
