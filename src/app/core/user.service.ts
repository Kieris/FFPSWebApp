import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  mobSearch: string;
  itemSearch: string;
  ahSearch: string;
  zoneSearch: string;
  playerSearch: string = "Jendaro";


  constructor() { }

}
