import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {

  constructor() {

  }

  ngOnInit(): void {

  }
  isWatchShow: boolean = false

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    aadharCard: new FormControl('', [Validators.required, Validators.pattern("[1-9]{12}")]),
    dob: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    bloodGroup: new FormControl('Select Your Blood Group', [Validators.required]),
    haveWatch: new FormControl('No', [Validators.required]),
  })

  handleUserRegistration(data: any) {
    console.log(data.value);
  }

  showWatchDiv() {
    this.isWatchShow = !this.isWatchShow
  }

}
