import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PostcodeioService } from './postcodeio.service';

@Component({
  selector: 'app-postcodes-lookup',
  templateUrl: './postcodes-lookup.component.html',
  styleUrls: ['./postcodes-lookup.component.css']
})
export class PostcodesLookupComponent implements OnInit {

  postcodeslookupForm! : FormGroup;
  lookup : any;
  userlocation : any; 
  distanceM : any; 
  distanceKM :any;
  latitude1 : any;
  longitude1 : any;
  latitude2 = 51.4700223;
  longitude2 = -0.4542955;
  btnSearch = "Search Location";
  lookupHistory : any;
  itemcount = 3;



  constructor(private fb:FormBuilder, private http:HttpClient
    , private postcodeService : PostcodeioService) { }

  ngOnInit(): void {
    this.userlocation = "Search your location......";
    this.distanceM = 0.0;
    this.distanceKM = 0.0;
    this.postcodeslookupForm = this.fb.group({
      fPostcode:['']
      });

      this.GetLookupHistory(this.itemcount);
  }

  OnSubmit()
  {
    this.GetPostcodesLookup(this.postcodeslookupForm.controls['fPostcode'].value);
    
  }

  GetPostcodesLookup(postcode:any)
  {
    this.postcodeService.GetPostcodeLookup(postcode)
    .subscribe(data=>
      {
        console.log(data);
        this.lookup = data;  
        this.userlocation = this.lookup.postcode +' '+  this.lookup.adminDistrict +', '+ this.lookup.region +', '+this.lookup.country;
        this.latitude1 = this.lookup.latitude;
        this.longitude1 = this.lookup.longitude;
        this.GetDistance('K');
        this.GetDistance('M');
        this.GetLookupHistory(this.itemcount);

      },
      (error) => {
        this.distanceM = 0.0;
        this.distanceKM = 0.0;
        this.userlocation = "No Data Found";
      })
      ;
  }
  
  GetDistance(unit :any){
  
    this.postcodeService.Distance(this.latitude1,this.longitude1,this.latitude2,this.longitude2,unit)
    .subscribe(data=>
      {
        console.log(data);
        if(unit=='M')
          this.distanceM = data;
        else
          this.distanceKM = data;
      }
      );
  }


  GetLookupHistory(itemCount :any){
  
    this.postcodeService.GetLookupHistory(itemCount)
    .subscribe(data=>
      {
        console.log(data);
        this.lookupHistory = data;
      }
      );
  }



}

