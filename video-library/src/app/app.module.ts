import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VideoGridComponent } from './video-grid/video-grid.component';
import { ModalComponent } from './modal/modal.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { ModalHolderDirective } from './modal-holder.directive';


@NgModule({
  declarations: [
    AppComponent,
    VideoGridComponent,
    ModalComponent,
    ThumbnailComponent,
    ModalHolderDirective
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
