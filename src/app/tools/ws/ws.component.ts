import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { ElementPipe } from '../tools.component';

@Component({
  selector: 'app-ws',
  templateUrl: './ws.component.html',
  styleUrls: ['./ws.component.scss']
})
export class WsComponent implements OnInit {
  skills;
  id: number = 0;
  constructor(private route: ActivatedRoute, private ds: ApiService,
    private elemPipe: ElementPipe) {
    if (route.params) {
      route.params.subscribe(val => {
        this.id = Number(val.id);// have to convert for pipe to work
        this.ds.sendGetWSByType(this.id).toPromise().then((data: any[])=>{
          if(data) {
            this.skills = data;
          }          
        });
      });
    }
   }
  ngOnInit(): void {
  }

  getElem(elemInt) {
    return this.elemPipe.transform(elemInt);
  }
}
