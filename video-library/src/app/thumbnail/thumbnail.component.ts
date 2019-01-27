import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input() videoDetails;

  @Output() clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  click(){
     this.clickEvent.emit(this.videoDetails);
     console.log("Clicked from thumbnail!");
  }

}
