import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrl: './airport.component.css',
})
export class AirportComponent implements OnInit {
  airportList: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllAirports();
  }

  getAllAirports() {
    this.apiService.getData('GetAllAirport').subscribe((res: any) => {
      this.airportList = res.data;
    });
  }

  bulkUpdateAirport() {
    this.apiService
      .postData('AddUpdateBulkAirports', this.airportList)
      .subscribe((res: any) => {
        if (res.result) {
          alert('Bulk Update Success');
        } else {
          alert(res.message);
        }
      });
  }

  addNew() {
    const obj = {
      airportId: 0,
      airportCode: '',
      airportName: '',
      cityId: 0,
    };
    this.airportList.unshift(obj);
  }
}
