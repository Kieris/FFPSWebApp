import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-item-icon',
  templateUrl: './item-icon.component.html',
  styleUrls: ['./item-icon.component.scss']
})
export class ItemIconComponent implements OnInit {
prePath = environment.ImgFilePath

@Input() Val
@Input() Eq
  constructor() { }

  ngOnInit(): void {
  }

}
