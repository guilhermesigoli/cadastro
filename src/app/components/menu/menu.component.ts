import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() show = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  emit(item: string) {
    this.show.emit(item);
  }



}
