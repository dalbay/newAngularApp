import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Item } from '../item/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  item: Item = {
    title: 'Plane',
    description: 'aviation'
  }
  item2: Item = {
    title: 'Car',
    description: 'vehicle'
  }
  item3: Item = {
    title: 'Ball',
    description: 'Game'
  }
  items: Item[] = [this.item, this.item2, this.item3];
  constructor(private http: HttpClient) { }
  
  getItems(): Observable<Item[]> {
    //return this.http.get<Item>(`api/items`);
    return of(this.items as Item[])
  }
}
