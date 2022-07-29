import { Component, OnInit,Input,SimpleChanges, OnChanges  } from '@angular/core';
import {  DeviceProfileId, Property } from '@app/shared/public-api';
import { DeviceProfileService } from '@app/core/public-api';
import { DeviceProfileComponent } from '@app/modules/home/components/profile/device-profile.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tb-object-model',
  templateUrl: './object-model.component.html',
  styleUrls: ['./object-model.component.scss']
})



export class ObjectModelComponent implements OnInit {
  fillModelFormGroup : FormGroup;
  properties:Array<Property>;
  
  @Input()
  deviceProfileId: DeviceProfileId;

  constructor(private deviceProfileService: DeviceProfileService) { }

  ngOnInit(): void {
    this.loadProperties(this.deviceProfileId);
  }

  ngOnChanges(){
    this.loadProperties(this.deviceProfileId);
  }

  loadProperties(deviceProfileId: DeviceProfileId){
    console.log(typeof( this.deviceProfileId.id));
    console.log(this.deviceProfileId.id);
     //this.deviceProfileService.getPropertiesByDeviceProfileId("b275f1f0-0e75-11ed-8951-2b473ef2163f").subscribe(properties=>{this.properties=properties});
    this.deviceProfileService.getPropertiesByDeviceProfileId(deviceProfileId.id).subscribe(properties=>{this.properties=properties
  })

  }
}