import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../../../../model/contact";

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  @Input() contact: Contact | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
