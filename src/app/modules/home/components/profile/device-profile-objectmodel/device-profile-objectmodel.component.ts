import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
@Component({
  selector: 'tb-device-profile-objectmodel',
  templateUrl: './device-profile-objectmodel.component.html',
  styleUrls: ['./device-profile-objectmodel.component.scss']
})
export class DeviceProfileObjectmodelComponent implements OnInit {

  types = ["Double","String","Boolean","Long"];

  productForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.productForm = this.fb.group({
      quantities: this.fb.array([]) ,
    });
  }

  ngOnInit(): void {
  }

  gettypes(): Array<String>{
    return this.types;
  }

  quantities() : FormArray {
    return this.productForm.get("quantities") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
      name: '',
      type: 'Double',
      isTag: false
    })
  }
   
  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }
   
  onSubmit() {
    console.log(this.productForm.value);
  }

  

}
