import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactsService} from '../../contacts.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(
    private contactService : ContactsService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const name = form.value.name;
    const photo = form.value.photo;
    const email = form.value.email;
    const phone = form.value.phone;
    this.contactService.addContact(name,photo,email,phone);
  }
}
