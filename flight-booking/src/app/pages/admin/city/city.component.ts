import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit {
  cityList: any [] = [];
  constructor(private apiService: ApiService) {}

  // On page load, cityList should be populated with cities
  ngOnInit(): void {
    this.getAlLCity();
  }

  getAlLCity() {
    this.apiService.getData("GetAllCity").subscribe((res: any) => {
      this.cityList = res.data;
    })
  }

  bulkUpdateCity() {
    this.apiService.postData("AddUpdateBulkCity", this.cityList).subscribe((res: any) => {
      if (res.result) {
        alert("Bulk Update Success")
      } else {
        alert(res.message)
      }
    })
  }

  addNew() {
    const obj = {
      cityId: 0,
      cityName: ""
    }
    this.cityList.unshift(obj);
  }
}
