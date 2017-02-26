import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';

import { Slides } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {StreamService} from '../../providers/stream-service';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers: [StreamService,Slides]
})

export class Page1 {


  @ViewChild(Slides) slides: Slides;

  streamData: any;



  constructor(public navCtrl: NavController, private stream:StreamService) {
    
    this.loadStream();
  }


  loadStream(){
    this.stream.load().then(data => {
      
      for (let entry of data) {
           
            entry.stream.date=new Date(entry.stream.date*1000);
      }
      this.streamData = data;
      
    });
  }

  slideChanged() {
    console.log("Current index is");
  }

}
