import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1,3,5];
  evenNumbers = [2,4];
  onlyOdd = false;
  value = 5;


    heroes = [
        {id: 1, name:'Superman'},
        {id: 2, name:'Batman'},
        {id: 5, name:'BatGirl'},
        {id: 3, name:'Robin'},
        {id: 4, name:'Flash'}
    ];
}
