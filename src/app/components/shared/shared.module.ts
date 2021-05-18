import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './header/header.component';
import {BreadcrumbModule} from 'angular-crumbs';
import {FooterComponent} from './footer/footer.component';


const SharedComponents = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [
    SharedComponents
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BreadcrumbModule
  ],
  exports: [
    SharedComponents
  ]
})
export class SharedModule {
}
