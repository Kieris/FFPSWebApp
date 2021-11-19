import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-misc-details',
  templateUrl: './misc-details.component.html',
  styleUrls: ['./misc-details.component.scss']
})
export class MiscDetailsComponent implements OnInit {
notes;
id: string;
constructor(private route: ActivatedRoute, private ds: ApiService) {
  if (route.params) {
    route.params.subscribe(val => {
      this.id = val.id;
      this.ds.sendGetMiscNotes(val.id, val.type).toPromise().then((data: any[])=>{
        if(data) {
          this.notes = data;
        }
      });
    });
  }
 }

  ngOnInit(): void {
  }

}
