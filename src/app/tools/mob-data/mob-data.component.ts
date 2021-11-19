import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-mob-data',
  templateUrl: './mob-data.component.html',
  styleUrls: ['./mob-data.component.scss']
})
export class MobDataComponent implements OnInit {
  data;
  searchVal: string;
  alertMessage;
  error = true;

  constructor(private dataService: ApiService, private us: UserService) {
    if (us.mobSearch) {
      this.searchVal = us.mobSearch;
      this.searchClick();
    }
  }

  ngOnInit(): void {
  }

  searchClick() {
    this.us.mobSearch = this.searchVal;
    var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const maxChar = 30;
    if(format.test(this.searchVal)) {
      this.error = true;
      this.alertMessage = 'The search cannot contain any symbols.';
    } else {
      this.alertMessage = '';
      if (this.searchVal && this.searchVal.length < maxChar) {
        this.dataService.sendGetMob(this.searchVal).subscribe((data: any[])=>{
          this.data = data;
          if(!data) {
            this.error = false;
            this.alertMessage = 'No results were found. If not already done, try typing all parts of the name.';
          }               
        });
      } else {
        this.error = true;
        this.alertMessage = 'The search must have a value and be less than ' + maxChar + ' characters.';
      }
    }
  }

  itemClick(item) {
    item.open = !item.open;
  }
}
