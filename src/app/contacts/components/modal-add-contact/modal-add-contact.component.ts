import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal-add-contact',
  templateUrl: './modal-add-contact.component.html',
  styleUrls: ['./modal-add-contact.component.scss'],
})
export class ModalAddContactComponent implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
    ) { }

  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss(null,'Cancel add');
  }

  onSave(){
    this.presentLoading().then(()=> {
      this.presentToastAddContactSucces();
      this.modalCtrl.dismiss(null,'Successfully added');
    });
  }

  async presentToastAddContactSucces() {
    const toast = await this.toastCtrl.create({
      message: 'New contact added',
      duration: 2000
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Adding contact..',
      duration: 2000
    });
    await loading.present();

    const {role,data} = await loading.onDidDismiss();
    console.log('Loading dismissed')
  }
}
