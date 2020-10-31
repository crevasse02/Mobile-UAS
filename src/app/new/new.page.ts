import { Component } from "@angular/core";
import { PopoverController, ToastController } from "@ionic/angular";
import { PopoverComponent } from "../popover/popover.component";

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage {
  constructor(
    public toastController: ToastController,
    public popoverController: PopoverController
  ) {}

  async toastDisplay() {
    const toast = await this.toastController.create({
      message: "This Toast From Me!",
      header: "My header Raffi!",
      duration: 2000,
      buttons: [
        {
          text: "close",
          role: "cancel",
        },
      ],
    });
    toast.present();
  }

  async popoverDisplay(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: "my-custom-class",
      event: ev,
      translucent: true,
      backdropDismiss: false,
    });
    return await popover.present();
  }
}
