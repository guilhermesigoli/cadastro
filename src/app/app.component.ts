import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cadastro';

  showList = false;
  showForm = false;

  show(event: any) {
    console.log(event)
    this.showList = false;
    this.showForm = false;

    if(event === 'form') {
      this.showForm = true;
    } else {
      this.showList = true;
    }
  }
}
