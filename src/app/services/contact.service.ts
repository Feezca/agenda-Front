import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';
import {API} from '../constants/api'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  async create(contact: Contact):Promise<boolean> {
    const res = await fetch(API+'contacts/',{
      method:'POST',
      body : JSON.stringify(contact),
      headers:{
        "Content-type":"application/json"
              }
      })
      return res.ok;
  };

  async delete(id:number): Promise<boolean>{
    const res = await fetch(API+'contacts/'+id,{
      method:'DELETE'
    })
    return res.ok;
  };

  update(){
    throw("Método no implementado")
  };

  async getAll():Promise<Contact[]>{
    const res = await fetch(API+"contacts.json");
    const resJson = await res.json();
    return resJson;
  };
  
  async getById(id:number | string):Promise<Contact | undefined>{
    const contacts = await this.getAll()
    return contacts.find(contact => contact.id == id);
  };
} 