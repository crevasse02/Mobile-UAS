import { Injectable } from '@angular/core';
import {Contact} from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private add = 3;

  private contacts: Contact[] = [
    {
      id: 'ac1',
      name: 'Muhammad Abdurraffi',
      imageUrl: 'https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/4ec21332-44ec-446b-9bd8-105e96777d72',
      email: ['muhammad.abdurraffi@student.umn.ac.id','wiboworaffi82@gmail.com'],
      phone: ['081221211212','0812000999']
    },
    {
      id: 'ac2',
      name: 'Raffi WIbowo',
      imageUrl: 'https://img.favpng.com/25/0/6/vector-graphics-stock-photography-royalty-free-silhouette-man-png-favpng-JnkUPgJzGPiuEQSLr7ry0Xi0g.jpg',
      email: ['madraffi82@gmail.com','testin123@gmail.com'],
      phone: ['08999222111','0800880808']
    }
  ]
  constructor() { }

  getAllContacts(){
    return [...this.contacts];
  }

  getContact(contactId: string){
    return {...this.contacts.find(contact => {
      return contact.id === contactId;
    })};
  }

  deleteContact(contactId: string) {
    this.contacts = this.contacts.filter(recipe => {
      return recipe.id !==contactId;
    })
  }
  editContact(contactId: string,contactName: string, contactPhoto: string, contactEmail: string[], contactPhone: string[]){
    this.contacts.find(contact => {
      if(contact.id === contactId){
        contact.name = contactName;
        contact.phone = contactPhone;
        contact.email = contactEmail;
        contact.imageUrl = contactPhoto;
      }
    })
    console.log(this.contacts);
  }

  addContact(contactName: string, contactPhoto: string, contactEmail: string, contactPhone: string){
    const newData: Contact = {
      id: this.add.toString(),
      name: contactName,
      imageUrl: contactPhoto,
      phone: [contactPhone],
      email: [contactEmail]
    }

    this.add++;
    this.contacts.push(newData);
    console.log(...this.contacts);
  }
}