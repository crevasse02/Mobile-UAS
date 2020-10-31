import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    {
      id: '1',
      title: 'UMN Apartment',
      description: 'Apartment for UMN Students',
      imageUrl: 'https://i.pinimg.com/736x/4a/a9/55/4aa955a400be6c95a34a61bb0094ba35.jpg',
      price: 500000,
    },
    {
      id: '2',
      title: 'Serpong Apartment',
      description: 'Apartment for Everyone',
      imageUrl: 'https://www.thespruce.com/thmb/tNJlVyV4Kl5WprXtnHGTUrzOMHA=/2121x1193/smart/filters:no_upscale()/large-multi-condos-building-blocks-with-bicycles-lane-1174752803-9d506d8c43484c34b32f03afecf0d8c3.jpg',
      price: 900000,
    },
    {
      id: '3',
      title: 'JKT Apartment',
      description: 'Apartment for Someone',
      imageUrl: 'https://b.dmlimg.com/ZGI4NjU5NzNlYzViNjZmZmM2ZjlmYmM0MjhiZjdjMGFVY_6FcA6YvUE50aD0icSRaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvYy9lL2NlN2U5YWYxMGFlZDIwNjc5MjU5YTU3MjkxZjZjZTI2LmpwZ3x8fHx8fDEwNDV4NjAwfHx8fA==.jpg',
      price: 1000000,
    }
  ]
  constructor() { }

  getAllPlaces(){
    return [...this.places];
  }

  getPlace(placeId: string){
    return {...this.places.find(place => {
      return place.id === placeId;
    })};
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId;
    })
  }
}
