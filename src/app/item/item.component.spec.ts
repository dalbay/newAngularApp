import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemComponent } from './item.component';
import { ItemService } from '../services/item.service';
import { Observable, of } from 'rxjs';
import { Item } from './item';

describe('ItemComponent', () => {
  let service;
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let items: Item[] = [
    { title: '', description: '' },
    { title: '', description: ''},
  ]
  let mockService: any;
  beforeEach(async () => {
    mockService = { getItems: () => { subscribe: () => {}  } }
    
    await TestBed.configureTestingModule({
      declarations: [ItemComponent],
      providers: [
        { provide: ItemService, useValue: mockService }
      ]
    })
    .compileComponents();
    service = TestBed.inject(ItemService);
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('should read items', () => {
    it('should display a list of items', () => {
      spyOn(mockService, 'getItems').and.returnValues(of(items))
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.items).toHaveSize(1);
  });
  })

});
