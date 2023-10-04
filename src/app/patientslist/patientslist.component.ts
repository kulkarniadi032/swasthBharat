import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-patientslist',
  templateUrl: './patientslist.component.html',
  styleUrls: ['./patientslist.component.css']
})
export class PatientslistComponent {

  mainPatientsDataList: any;
  data: any;
  num1: any;
  num2: any;
  num3: any;
  num4: any;
  isShow: boolean = false;
  index:any;
  constructor() { }

  ngOnInit(): void {
    this.mainPatientsDataList = JSON.parse(localStorage.getItem('patientsList') || '{}')
  }


  patientForm = new FormGroup({
    patientName: new FormControl('Shiv Ramesh Patil', [Validators.required]),
    patientEmail: new FormControl('shiv032@gmail.com', [Validators.required]),
    patientNumber: new FormControl('9763612043', [Validators.required]),
    patientAadhar: new FormControl('867683861440', [Validators.required]),
  })

  handleAddPatient(patientData: any) {
    console.log(patientData.value);
    // localStorage.setItem('patientsList', JSON.stringify([patientData.value]))
    this.data = patientData.value;
    if (localStorage.getItem('patientsList')) {
      let patientsDataList = JSON.parse(localStorage.getItem('patientsList') || '{}');
      this.mainPatientsDataList = [...patientsDataList, this.data];
      localStorage.setItem('patientsList', JSON.stringify(this.mainPatientsDataList))
    } else {
      localStorage.setItem('patientsList', JSON.stringify([this.data]))
    }



  }

  handleAddDataInLocalStorage() {
    this.num1 = Math.floor(Math.random() * 10);
    this.num2 = Math.floor(Math.random() * 10);
    this.num3 = Math.floor(Math.random() * 10);
    this.num4 = Math.floor(Math.random() * 10);
  }

  handleDeletePatientData(index: any) {
    console.log(index);

    this.index = index;
    // let mainPatientsDataList = [...this.mainPatientsDataList]
    // mainPatientsDataList.splice(index, 1)
    // this.mainPatientsDataList = mainPatientsDataList
    // localStorage.setItem('patientsList', JSON.stringify(mainPatientsDataList))
  }

  handleConfirmDeletePatientData() {

    let mainPatientsDataList = [...this.mainPatientsDataList]
    mainPatientsDataList.splice(this.index, 1)
    this.mainPatientsDataList = mainPatientsDataList
    localStorage.setItem('patientsList', JSON.stringify(mainPatientsDataList))
  }

  toggle(){
    this.isShow = !this.isShow
  }
}
