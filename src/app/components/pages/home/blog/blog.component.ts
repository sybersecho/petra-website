import { Component, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }
  faCalendar = faCalendar;

  ngOnInit(): void {
  }

}
