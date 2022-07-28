import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
@Component({
  selector: 'tb-device-profile-objectmodel',
  templateUrl: './device-profile-objectmodel.component.html',
  styleUrls: ['./device-profile-objectmodel.component.scss']
})
export class DeviceProfileObjectmodelComponent implements OnInit {

  types = ["Double","String","Boolean","Long"];


  //用于向父组件传递组件
  @Output() objectmodelChange:EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  productForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.productForm = this.fb.group({
      properties: this.fb.array([]) ,
    });
  }

  ngOnInit(): void {
  }

  gettypes(): Array<String>{
    return this.types;
  }

  properties() : FormArray {
    return this.productForm.get("properties") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
      name: '',
      type: 'Double',
      isTag: false
    })
  }
   
  addQuantity() {
    this.properties().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.properties().removeAt(i);
  }
   
  onSubmit(){
    //一旦保存就将表格数据传递给父组件
    this.objectmodelChange.emit(this.productForm);
  }
  

}
