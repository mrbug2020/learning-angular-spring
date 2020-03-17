import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Input('styleClass') styleClass: any;
  @Input('placeHolder') placeHolder: any = '';
  @Input('searchIcon') searchIcon: string = 'icon-search';
  @Input('searchDebounceTime') searchDebounceTime: number = 200;
  @Output() searchChange = new EventEmitter();
  @Output() searchClick = new EventEmitter();
  searchSubject = new Subject<string>();

  constructor() {
    this.searchChange = <any>this.searchSubject.asObservable().pipe(debounceTime(this.searchDebounceTime), distinctUntilChanged());
  }
  ngOnInit(): void {

  }

  handlerSearchChange(event: any) {
    if (event) {
      this.searchSubject.next(event.target.value);
    }
  }

  handlerSearchClick(searchInput: HTMLInputElement) {
    this.searchClick.emit(searchInput.value);
  }

}
