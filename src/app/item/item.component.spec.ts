import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemComponent } from './item.component';
import { ItemService } from '../services/item.service';
import { Observable, of } from 'rxjs';
import { Item } from './item';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let itemService: ItemService;
   let   items: Item[] = [
    { title: 'car', description: 'vehicle' },
    { title: 'ball', description: 'game'},
  ]
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      declarations: [ItemComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: ItemService, useValue: {
            getItems: () => of(items)
          }
        }],
    }).compileComponents();
    
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    itemService = TestBed.get(ItemService);
    fixture.detectChanges();
    
  });
  
    fit('should load a list of items', () => {
      const spy = spyOn(itemService, 'getItems').and.callThrough();
      component.ngOnInit();
      fixture.detectChanges();
      expect(itemService.getItems).toHaveBeenCalled();
      expect(component.items.length).toBeGreaterThan(1);      
  });
});
