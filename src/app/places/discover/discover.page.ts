import { Component, OnInit } from '@angular/core';
import {Place} from '../places.model';
import {PlacesService} from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  places: Place[];
  headline: Place;
  headline_price: String;
  cardlist: Place[] = [];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.places = this.placesService.getAllPlaces();
    this.headline = this.places[0];
    this.headline_price = this.headline.price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    });
    
    this.cardlist = [];
    for (let index = 1; index < this.places.length; index++) {
      this.cardlist.push(this.places[index]);
      console.log(this.cardlist);
    }
  }
}
