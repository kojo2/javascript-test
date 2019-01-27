import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DataService } from '../data.service';
import * as _ from 'lodash';
import { ComponentFactoryResolver } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.css']
})
export class VideoGridComponent implements OnInit {

  pageVideos;
  allVideos;
  totalPages;
  numbers;
  currentPage = 0;
  tabs;
  currentTab;
  allContent;
  currentContent;
  people;

  modalVisible = false;
  videoChosen;

  constructor(private service:DataService, private componentFactoryResolver:ComponentFactoryResolver, private viewContainerRef:ViewContainerRef) { }

  ngOnInit() {
    // get the data from the service
    this.service.getData().subscribe(data=>{
      this.allContent = data['content'];
      // turn data.tabs object into array
      this.tabs = Object.keys(data['tabs']).map((key)=>{return data['tabs'][key]});
      // set first tab as chosen tab
      this.currentTab = Object.keys(this.allContent)[0];
      this.changeContentType(this.currentTab);
      this.getPeople();
    });
  }

  pagifyContent(){
    // chunk the videos into 12 for pages (12 to a page)
    this.currentContent = _.chunk(this.currentContent,12);
      this.allVideos = this.currentContent;
      this.totalPages = this.currentContent.length;
      this.pageVideos = this.currentContent[0];
      // create array for page numbers
      this.numbers = Array(this.totalPages).fill(0).map((x,i)=>i+1);
  }

  changeContentType(tabId) {
    // change content type (from tabs)
    this.currentTab = tabId;
    this.currentContent = this.allContent[tabId];
    this.pagifyContent();
  }

  changePage(){
    this.pageVideos = this.allVideos[this.currentPage];
  }

  nextPage() {
    this.currentPage++;
    this.changePage();
  }

  prevPage(){
    this.currentPage--;
    this.changePage();
  }

  jumpToPage(pageNo){
    // to deal with the discrepancy between the array starting at zero and page numbers starting at 1
    // we subtract 1 from the page number we are jumping to.
    this.currentPage = pageNo-1;
    this.changePage(); 
  }

  openModal(videoDetails){
    this.videoChosen = videoDetails;
    this.loadComponent();
  }

  closeModal(){
    this.modalVisible = false;
  }

  // this function loads the modal when a video is chosen
  loadComponent() {
    this.viewContainerRef.clear();
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    let componentRef = this.viewContainerRef.createComponent(componentFactory);
    componentRef.instance.videoDetails = this.videoChosen;
    componentRef.instance.self = componentRef;
   }

   tabClick(e){
    // run when a user clicks on a tab to change content type
    // get the tabId from the tab that was clicked
    let tabId = e.target.id;
    this.changeContentType(tabId);
   }

   getPeople(){
    let people=[];
    // find all the people mentioned and add them to the people array (for populating the filter)
    Object.keys(this.allContent).forEach(key => {
      let content = this.allContent[key];
      content.forEach(element => {
        element.people.split(", ").forEach(person => {
          if(people.indexOf(person)==-1)
            people.push(person);
        });
      });
    });
    this.people = people;
    console.log("people: ",people);
   }

   filterPerson(e){
     let person = e.target.id;
     // use lodash to change object into array
     let allContentArray = _.values(this.allContent);
     // flatten array 
     allContentArray = [].concat.apply([],allContentArray);
     this.currentContent = allContentArray.filter(x=>{return x.people.indexOf(person)>-1});
     console.log("this.currentContent = ",this.currentContent);
     this.pagifyContent();
   }

}
