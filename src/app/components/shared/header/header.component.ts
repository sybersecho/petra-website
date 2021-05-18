import { Component, OnInit } from '@angular/core';
// @ts-ignore
import navigation from '../../../data/navigation.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public navigation = navigation;

  ngOnInit(): void {
  }

}
