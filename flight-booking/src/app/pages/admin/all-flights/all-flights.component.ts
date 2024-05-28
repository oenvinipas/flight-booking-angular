import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrl: './all-flights.component.css'
})
export class AllFlightsComponent implements OnInit {
  flightList: any[] = [];

  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.loadFlights()
  }

  loadFlights() {
    this.apiService.getData("GetAllFlights").subscribe((res: any) => {
      this.flightList = res.data;
    })
  }

}
