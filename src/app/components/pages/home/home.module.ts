import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {InformationComponent} from './information/information.component';
import {AboutComponent} from './about/about.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BlogComponent} from './blog/blog.component';
import {GalleryComponent} from './gallery/gallery.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    InformationComponent,
    AboutComponent,
    BlogComponent,
    GalleryComponent,
    ContactComponent
  ],
  exports: [
    AboutComponent,
    InformationComponent,
    BlogComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    FontAwesomeModule
  ]
})
export class HomeModule {
}
