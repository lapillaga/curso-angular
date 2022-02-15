import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/shared/services/contact/contact.service';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss']
})
export class ClassicComponent implements OnInit {

  ngOnInit() {
  }
}
