import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddsenserService } from './addsenser.service';

@Component({
  selector: 'app-addsensor',
  templateUrl: './addsensor.component.html',
  styleUrls: ['./addsensor.component.css']
})
export class AddsensorComponent {
  myForm!: FormGroup;
  //status = true;
  constructor(private formBuilder: FormBuilder, private service: AddsenserService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      virtualSensorName: new FormControl(''),
      threshold: new FormControl(''),
      minValue: new FormControl(''),
      maxValue: new FormControl(''),
      status: new FormControl(true),
    })
  }

  // Handle form submission
  onSubmit(myForm: FormGroup) {
    console.log(myForm.value)
    console.log('Valid?', myForm.valid); 
  
      this.service.addSensor(myForm.value).subscribe(res=>{
        console.log(myForm.value)
      });
      alert("Added sensor successfully");
    
  
  }
}
