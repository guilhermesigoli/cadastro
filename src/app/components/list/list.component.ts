import { RegisterService } from './../../services/register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  people: any[] = [];
  showDetails = "";

  constructor(
    private readonly registerService : RegisterService
  ) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.people = this.registerService.getPeople();
  }

  show(name: string){
    this.showDetails = name;
  }

}
