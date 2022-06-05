import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  constructor(private http: HttpClient) { }





    login_api(data) {
      return this.http.post(this.apiUrl + 'blooduserdetail/login', data);
    }


     add_blood_group(data) {
      return this.http.post(this.apiUrl + 'blooddetail/create', data);
    }

    update_blood_group(data) {
      return this.http.post(this.apiUrl + 'blooddetail/edit', data);
    }

    fetch_details_id(data) {
      return this.http.post(this.apiUrl + 'blooddetail/getlist_id', data);
    }

    fetch_details_list(data) {
      return this.http.post(this.apiUrl + 'blooddetail/getlist_group', data);
    }
   

    


    

    

}
