import { Component } from '@angular/core';

enum Category {
  firstSample = 'firstSample',
  secondSample = 'secondSample',
  thirdSample = 'thirdSample'
}
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent {
  name = 'first component name';
  description = 'first component description';
  price = 10;
  category = Category;
  isAvailable = true;
  arrayProp: Array<string> = ['test1', 'test2', 'test3'];
}
