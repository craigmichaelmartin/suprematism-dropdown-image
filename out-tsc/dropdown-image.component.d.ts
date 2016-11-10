import { EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';
import { Item } from './item.interface';
export declare class DropdownImageComponent implements OnInit {
    supreDefault: string;
    supreItems: Array<Item>;
    itemSelected: EventEmitter<{}>;
    selectedSource: Subject<Item>;
    selected$: Observable<Item>;
    showItemsSource: Subject<'toggle'>;
    showItems$: Observable<boolean>;
    activeItemSource: Subject<Item>;
    activeItem$: Observable<Item>;
    noItem: {
        name: string;
        image: string;
    };
    ngOnInit(): void;
}
