import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { sanitizeResourceUrl } from '@angular/core/src/sanitization/sanitization';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() videoDetails;
  @Input() self;

  tags=[];

  url:SafeResourceUrl;

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.asset.tv/site/ms592fcd270cfe7/"+this.videoDetails.vid+"?chid=2240");
    this.tags = this.videoDetails.tags.split(", ");
    console.log("tags: ",this.tags);
  }

  close() {
    this.self.destroy();
  }

}
