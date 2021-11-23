import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent implements OnInit {
atts;
  constructor(private ds: ApiService) { }

  ngOnInit(): void {
    this.ds.sendGetPupAttach().toPromise().then(data => {
      this.atts = data;
    });
  }
}
