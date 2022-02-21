import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostcodeioService {

  baseUrl  = 'https://localhost:5001/api/PostcodesIO';
  constructor(private http:HttpClient) { }

  GetPostcodeLookup(postcode: any){
    
    return this.http.get(this.baseUrl+'?postcode='+postcode);

  }

  Distance(lat1:any,long1:any,lat2:any,long2:any,unit :any){

    return this.http.get(this.baseUrl+'/distance?lat1='+lat1+'&long1='+long1+'&lat2='+lat2+'&long2='+long2+'&unit='+unit);

  }

  GetLookupHistory(itemCount:any)
  {
    return this.http.get(this.baseUrl+'/GetLookupHistory/'+ itemCount);
  }


}
