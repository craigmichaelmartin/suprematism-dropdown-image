import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';
import { Item } from './item.interface';

@Component({
  selector: 'supre-dropdown-image',
  template: require('./dropdown-image.component.html'),
  styles: [require('./dropdown-image.component.css')]
})
export class DropdownImageComponent implements OnInit {

  // ------ Inputs -----------------------------------------------------------

  @Input() supreDefault: string;

  @Input() supreItems: Array<Item>;

  @Output() itemSelected = new EventEmitter();


  // ------ Properties -------------------------------------------------------

  selectedSource: Subject<Item>;
  selected$: Observable<Item>;
  showItemsSource: Subject<'toggle'>;
  showItems$: Observable<boolean>;
  activeItemSource: Subject<Item>;
  activeItem$: Observable<Item>;
  noItem = {name: '', image: ''};


  // ------ Lifecycle Hooks ---------------------------------------------------

  ngOnInit() {
    this.selectedSource = new Subject<Item>();
    this.showItemsSource = new Subject<'toggle'>();
    this.activeItemSource = new Subject<Item>();
    const defaultItem = this.supreDefault
      ? this.supreItems.find((item) => item.name === this.supreDefault)
      : this.supreItems[0];
    this.selected$ = this.selectedSource
      .startWith(defaultItem);
    this.showItems$ = this.showItemsSource
      .scan((current_state) => !current_state, false)
      .startWith(false);
    this.activeItem$ = this.activeItemSource.startWith(this.noItem);
    this.selected$.distinctUntilChanged().subscribe(
      (item: Item) => this.itemSelected.emit(item.name));
  }

}
