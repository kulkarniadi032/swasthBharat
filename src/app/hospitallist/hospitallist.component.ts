import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hospitallist',
  templateUrl: './hospitallist.component.html',
  styleUrls: ['./hospitallist.component.css']
})
export class HospitallistComponent {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  city:any = 'pune';
  hospitalList:any;

  handleGetCityValue(cityValue: any) {
    this.http.get(`https://nominatim.openstreetmap.org/search?q=${cityValue}&format=json`).subscribe((data: any) => {
      console.log(data);
      console.log(data[0].lat);
      console.log(data[0].lon);
      this.http.get(`https://overpass-api.de/api/interpreter?data=[out:json];(node(around:5000,${data[0].lat},${data[0].lon})["amenity"="hospital"];);out;`).subscribe((finalData: any)=>{
        console.log(finalData.elements);
        this.hospitalList = finalData.elements
      })
    })
  }
}
