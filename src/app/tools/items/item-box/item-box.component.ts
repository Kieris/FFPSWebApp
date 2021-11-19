import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.scss']
})
export class ItemBoxComponent implements OnInit {
@Input() item
  constructor() { }

  ngOnInit(): void {
  }

  getEx(flag: number) {
    return 0x4000 & flag; 
  }
  
  getRare(flag: number) {
    return 0x8000 & flag; 
  }
}
