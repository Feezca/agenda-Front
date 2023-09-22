import { Component,OnInit , inject } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Contact } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.scss']
})
export class DetailContactComponent implements OnInit {

  contactService = inject(ContactService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  contact : Contact ={
    id: 0,
    nombre:"",
    apellido:"",
    direccion:"",
    telefono:"",
    email:"",
    profileImg:"",
    empresa:""
  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.contactService.getById(params['id']).then(res => {
        if(res) this.contact = res;
      })
    })
  }
  deleteContact(){
    Swal.fire({
      title: 'Eliminar contacto?',
      text: "No se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
          this.contactService.delete(this.contact.id).then(res=>{
            if(res){
              Swal.fire(
                'Contacto eliminado!',
                'Ya no se encuentra en tu agenda.',
                'success'
              );
              this.router.navigate(['contacts']);
            }
            else{
              Swal.fire(
                'No se pudo eliminar',
                'Hubo un error en el sistema',
                'error');
            }
          })
        }
      }
    )
  }
}
