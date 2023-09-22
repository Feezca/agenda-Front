import { Component, EventEmitter, Output,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent {

  @Output() cerrar = new EventEmitter();
  contactService= inject(ContactService)


  newContact : Contact={
    id: 0,
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    email: '',
    profileImg: '',
    empresa: ''
  }
  async create(){
    const res= await this.contactService.create(this.newContact);
    if(res){
      this.cerrar.emit();
      Swal.fire({
        title: 'Custom animation with Animate.css',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }else{
      Swal.fire('Error al crear el registro')
    }
  }

}
