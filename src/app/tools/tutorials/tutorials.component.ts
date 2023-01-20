import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {
  prePath = environment.ImgFilePath;
  tuts;
  filteredTuts;

  searchVal: string;
  constructor(private ds: ApiService) {
    this.ds.sendGetTuts().toPromise().then((x: any) => {
      this.tuts = x;
      this.filteredTuts = x;
    })
   }

  ngOnInit(): void {
  }

  onSearchTextChange() {
    this.filteredTuts = this.tuts?.filter(
      x => x.Name.toLowerCase().includes(this.searchVal.toLowerCase()));
  }
}
