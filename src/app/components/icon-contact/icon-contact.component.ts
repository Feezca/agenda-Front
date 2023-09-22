import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-icon-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-contact.component.html',
  styleUrls: ['./icon-contact.component.scss']
})
export class IconContactComponent {

    @Input() contact:Contact = {
      id:0,
      nombre: '',
      apellido: '',
      direccion: '',
      telefono: '',
      email: '',
      profileImg: '',
      empresa: ''
    }
}
