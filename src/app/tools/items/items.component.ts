import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items = [];
  alertMessage;
  error = true;
  searchVal: string = '';
  constructor(private ds: ApiService, private us: UserService) { 
    if (us.itemSearch) {
      this.searchVal = us.itemSearch;
      this.searchClick();
    }
  }

  ngOnInit(): void {
  }

searchClick() {
  this.us.itemSearch = this.searchVal;
  var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const maxChar = 30;
  if(format.test(this.searchVal)) {
    this.error = true;
    this.alertMessage = 'The search cannot contain any symbols.';
  } else {
    this.alertMessage = '';
    if (this.searchVal && this.searchVal.length < maxChar) {
          this.ds.sendGetItems(this.searchVal).toPromise().then((data: any[])=>{
            if(data) {
              this.items = data;
            } else {
              this.items = [];
              this.alertMessage = "No results found.";
              this.error = false;
            }

          });
    } else {
      this.error = true;
      this.alertMessage = 'The search must have a value and be less than ' + maxChar + ' characters.';
    }
  }
}

}

