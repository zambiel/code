import { Component } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent {

  btn2:boolean = false;
  btn1:boolean = true;

  clickBtn2() {
    this.btn1 = false;
    this.btn2 = !this.btn2;

  }

  clickBtn1() {
    this.btn2 = false;
    this.btn1 = !this.btn1;
  }
}
