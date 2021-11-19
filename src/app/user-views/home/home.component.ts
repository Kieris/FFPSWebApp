import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private dataService: ApiService) { }

  ngOnInit(): void {

  }

}
