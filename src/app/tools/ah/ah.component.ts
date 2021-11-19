import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-ah',
  templateUrl: './ah.component.html',
  styleUrls: ['./ah.component.scss']
})
export class AhComponent implements OnInit {
  products = [];
  alertMessage;
  error = true;
  searchVal: string = '';
  constructor(private ds: ApiService, private us: UserService) { 
    if (us.ahSearch) {
      this.searchVal = us.ahSearch;
      this.searchClick();
    }
  }

  ngOnInit(): void {
  }

searchClick() {
  this.us.ahSearch = this.searchVal;
  var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const maxChar = 30;
  if(format.test(this.searchVal)) {
    this.error = true;
    this.alertMessage = 'The search cannot contain any symbols.';
  } else {
    this.alertMessage = '';
    if (this.searchVal && this.searchVal.length < maxChar) {
          this.ds.sendGetAHItem(this.searchVal).subscribe((data: any[])=>{
            if(data) {
              this.products = data;
            } else {
              this.products = null;
              this.alertMessage = "No matches found in the Auction House.";
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
