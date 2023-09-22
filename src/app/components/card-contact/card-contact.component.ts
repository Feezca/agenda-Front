import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from 'src/app/interfaces/contact';
import { IconContactComponent } from '../icon-contact/icon-contact.component';

@Component({
  selector: 'app-card-contact',
  standalone: true,
  imports: [CommonModule,IconContactComponent],
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.scss']
})
export class CardContactComponent {
  @Input({required:true}) contact!:Contact;
}
