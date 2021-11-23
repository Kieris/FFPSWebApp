import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-bcnm',
  templateUrl: './bcnm.component.html',
  styleUrls: ['./bcnm.component.scss']
})
export class BcnmComponent implements OnInit {
bcnms;
filteredBCNMs;
searchVal: string;
  constructor(private ds: ApiService) { 
    this.ds.sendGetBcnms().toPromise().then(data => {
      this.bcnms = data;
      this.filteredBCNMs = this.bcnms;
    })
  }

  ngOnInit(): void {
  }

  onSearchTextChange() {
    this.filteredBCNMs = this.bcnms.filter(
      x => x.Name.toLowerCase().includes(this.searchVal.toLowerCase()) || x.ZName.toLowerCase().includes(this.searchVal.toLowerCase()) );
  }
}
