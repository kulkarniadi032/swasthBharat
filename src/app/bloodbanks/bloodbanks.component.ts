import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-bloodbanks',
  templateUrl: './bloodbanks.component.html',
  styleUrls: ['./bloodbanks.component.css']
})
export class BloodbanksComponent {

  constructor(private http: HttpClient, private sanitized: DomSanitizer) { }

  allBloodBankData: any;
  districtCode:any;
  bloodGroup:any;

  ngOnInit(): void {
  }

  bloodForm = new FormGroup({
    state: new FormControl('Maharashtra', [Validators.required]),
    district: new FormControl('Pune', [Validators.required]),
    bloodgroups: new FormControl('O +ve', [Validators.required]),
    bloodComponent: new FormControl('Whool blood', [Validators.required]),
  })

  handleBloodBankDetails(bloodData: any) {
    console.log(bloodData.value);
    console.log(this.bloodForm.value.state);
    if (this.bloodForm.value.district == "Mumbai"){
      this.districtCode = 519
    } else if(this.bloodForm.value.district == "Pune"){
      this.districtCode = 521
    }
    switch (this.bloodForm.value.bloodgroups) {
      case 'A +ve':
        this.bloodGroup = 11;
        break;
      case 'A -ve':
        this.bloodGroup = 12;
        break;
      case 'B +ve':
        this.bloodGroup = 13;
        break;
      case 'B -ve':
        this.bloodGroup = 14;
        break;
      case 'O +ve':
        this.bloodGroup = 15;
        break;
      case 'O -ve':
        this.bloodGroup = 16;
        break;
      case 'AB +ve':
        this.bloodGroup = 17;
        break;
      case 'AB -ve':
        this.bloodGroup = 18;
        break;
    }

    this.http.get(`https://www.eraktkosh.in/BLDAHIMS/bloodbank/nearbyBB.cnt?hmode=GETNEARBYSTOCKDETAILS&stateCode=27&districtCode=${this.districtCode}&bloodGroup=${this.bloodGroup}&bloodComponent=11&lang=0&_=1696134733516`).subscribe((bloodBankData: any) => {
      console.log(bloodBankData.data[0]);
      this.allBloodBankData = bloodBankData.data
      this.allBloodBankData = this.allBloodBankData.filter((item:any)=> !item[3].includes("text-danger"))
      console.log(this.allBloodBankData);
      
    })
    
    // this.bloodForm.reset();
    // this.bloodForm.setValue({ state: 'Select State', district: 'Select District', bloodgroups: 'All Blood Groups', bloodComponent: 'Select Blood Component' })
  }


}
