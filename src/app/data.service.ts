import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) { }

  getItems(day,month): Observable<any>{
    let dataString = "?dia="+day+"&mes="+month;
    return this.http.get('http://server1/sistemas/cumples/webserv.php'+dataString);
  }
}
