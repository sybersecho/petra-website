import {Component, OnInit} from '@angular/core';
import {faUser, faEnvelope, faTag, faPencilAlt, faPaperPlane} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() {
  }

  faUser = faUser;
  faEnvelope = faEnvelope;
  faTag = faTag;
  faPencilAlt = faPencilAlt;
  faPaperPlane = faPaperPlane;

  ngOnInit(): void {
  }

}
