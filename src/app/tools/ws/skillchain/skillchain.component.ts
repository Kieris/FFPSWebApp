import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-skillchain',
  templateUrl: './skillchain.component.html',
  styleUrls: ['./skillchain.component.scss']
})
export class SkillchainComponent implements OnInit {
  skills;
  wslist;
  id: number = 0;
  constructor(private route: ActivatedRoute, private ds: ApiService) {
    if (route.params) {
      route.params.subscribe(val => {
        this.id = Number(val.id);
        this.ds.sendGetSCByType(this.id).toPromise().then((data: any[])=>{
          if(data) {
            this.skills = data;
          }          
        });
        this.ds.sendGetWSBySCType(this.id).toPromise().then((data: any[])=>{
          if(data) {
            this.wslist = data;
          }          
        });
      });
    }
   }
  ngOnInit(): void {
  }

  getJobs(str: string) {
    var binary_string = window.atob(str);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);

    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes;
  }

}