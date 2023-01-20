import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArgumentOutOfRangeError } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-tut-dets',
  templateUrl: './tut-dets.component.html',
  styleUrls: ['./tut-dets.component.scss']
})
export class TutDetsComponent implements OnInit {
prePath = environment.ImgFilePath
items = [];
name;
cnt;
  constructor(private route: ActivatedRoute) {
    if (route.params) {
      route.params.subscribe(val => {
        this.cnt = Number(val.cnt);
        this.name = val.name;
        if (this.cnt === 1) {
          this.items.push(this.name);
        } else if (this.cnt > 1) {
          for (var i = 1; i <= this.cnt; i++) {
            this.items.push(this.name + "_" + i);  
          }
        }
      });
    }
   }

  ngOnInit(): void {
  }

}
