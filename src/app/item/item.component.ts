import { Component, Input, OnInit } from '@angular/core';
import { Item } from './item';
import { FormControl, FormGroup } from '@angular/forms';
import { ItemService } from '../services/item.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  // item: Item = {
  //   title: 'Plane',
  //   description: 'aviation'
  // }
  // item2: Item = {
  //   title: 'Car',
  //   description: 'vehicle'
  // }
  items: Item[] = [];
  
  
  itemForm!: FormGroup;
  private title: FormControl | undefined;
  private description: FormControl | undefined;
  
  constructor(private service: ItemService) { }

  ngOnInit(): void {
    this.title = new FormControl();
    this.description = new FormControl();
    
    this.itemForm = new FormGroup ({
      title: this.title,
      description: this.description
    });
    
    this.service.getItems().subscribe(
      {
        next: (data: Item[]) => this.items =  data
      }
    );
  }
  
  saveItem(item: Item): void {
    this.items.push(item);
    console.log(this.items);
  }

}
