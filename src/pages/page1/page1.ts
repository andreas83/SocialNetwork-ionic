import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';

import { Slides } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {StreamService} from '../../providers/stream-service';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers: [StreamService]
})

export class Page1 {


  
  @ViewChild(Slides) slides: Slides;
  streamData: any;



  constructor(public navCtrl: NavController, private stream:StreamService) {
    
    this.loadStream();
    
  }


  loadStream(){

    this.stream.load().then(data => {
        this.streamData = data;
    });
  }

  slideChanged() {
      //we load more 2 slides before end
      let buffer = 2;
      
      let currentIndex = this.slides.getActiveIndex();
      let length = this.slides.length();

      let virtualend = length - buffer;

      if(currentIndex == virtualend)
      {
        console.log("load more");
        this.stream.loadMore().then(data => {
           this.streamData = data;
           
          
        });
      }

      
  }

}
