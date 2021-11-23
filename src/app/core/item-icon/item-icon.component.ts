import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-icon',
  templateUrl: './item-icon.component.html',
  styleUrls: ['./item-icon.component.scss']
})
export class ItemIconComponent implements OnInit {
@Input() Val
@Input() Eq
  constructor() { }

  ngOnInit(): void {
  }

}
