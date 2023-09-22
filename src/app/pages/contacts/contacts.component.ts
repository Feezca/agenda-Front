import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, inject } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactService = inject(ContactService);

  contact: Contact[]=[];

  ngOnInit(): void {
    this.contactService.getAll().then(res => {
      this.contact = res;
    })
  }
}