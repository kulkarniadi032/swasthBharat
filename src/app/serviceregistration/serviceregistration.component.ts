import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-serviceregistration',
  templateUrl: './serviceregistration.component.html',
  styleUrls: ['./serviceregistration.component.css']
})
export class ServiceregistrationComponent {

    constructor(){}

    ngOnInit(): void {

    }

    serviceForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      aadharCard: new FormControl('', [Validators.required, Validators.pattern("[1-9]{12}")]),
      dob: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      bloodGroup: new FormControl('Select Your Blood Group', [Validators.required]),
      designation: new FormControl('Select Your Designation', [Validators.required]),
      haveWatch: new FormControl('No', [Validators.required]),
      experience: new FormControl('', [Validators.required]),
    })

    handleServiceRegistration(serviceData: any){
        console.log(serviceData.value);
        
    }
}
