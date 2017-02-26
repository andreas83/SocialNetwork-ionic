import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StreamService {

  public data: any;

  constructor(public http: Http) {
    console.log('Hello StreamService Provider');
  }

	load() {
  if (this.data) {
    return Promise.resolve(this.data);
  }

  
  return new Promise(resolve => {
    this.http.get('http://www.dasmerkendienie.com/api/content/')
      .map(res => res.json())
      .subscribe(data => {

        this.data = data;
        resolve(this.data);
      });
  });
}

}
