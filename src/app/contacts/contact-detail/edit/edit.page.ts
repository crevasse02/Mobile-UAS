import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../contact.model';
import { ContactsService } from '../../contacts.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  loadedContact: Contact;
  form: FormGroup;
  constructor(
    private contactsService: ContactsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('contactId')) {return ;}
      const contactId = paramMap.get('contactId');
      this.loadedContact = this.contactsService.getContact(contactId);
    });

    this.form = new FormGroup({
      name: new FormControl(this.loadedContact.name,{
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      phone: new FormControl(this.loadedContact.phone,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      email: new FormControl(this.loadedContact.email,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      photo: new FormControl(this.loadedContact.imageUrl,{
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  onEdit() {
    const phoneArr = this.form.value.phone.toString().split(',');
    const emailArr = this.form.value.email.toString().split(',');
    this.contactsService.editContact(this.loadedContact.id, this.form.value.name, this.form.value.photo, emailArr, phoneArr);
  }
}
