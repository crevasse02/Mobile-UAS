import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.page.html',
  styleUrls: ['./contact-detail.page.scss'],
})
export class ContactDetailPage implements OnInit {
  loadedContact: Contact;
  constructor(
    private activatedRoute: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('contactId')) {return ;}
      const contactId = paramMap.get('contactId');
      this.loadedContact = this.contactsService.getContact(contactId);
    });
  }

  deleteContact() {
    this.contactsService.deleteContact(this.loadedContact.id);
    this.router.navigate(['/contacts']);
    this.presentToast();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Hapus Kontak',
      message: 'Apakah yakin ingin menghapus? jika sudah dihapus, tidak bisa dikembalikan lagi.',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Hapus',
          handler: () => this.deleteContact()
        }
      ]
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Kontak dihapus',
      duration: 2000,
      color: 'warning'
    });
    toast.present();
  }

}
