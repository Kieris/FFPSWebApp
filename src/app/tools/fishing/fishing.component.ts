import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-fishing',
  templateUrl: './fishing.component.html',
  styleUrls: ['./fishing.component.scss']
})
export class FishingComponent implements OnInit {
  searchVal1: number = 1;
  seaItems;

  min = "min_skill_level";
  max = "skill_level";
  includeItems = false;


  constructor(private route: ActivatedRoute, private ds: ApiService) {
    if (route.params) {
      route.params.subscribe(val => {
        this.searchClick();
      });
    }
   }

  ngOnInit(): void {
  }

  searchClick() {
      this.ds.sendGetFishByLevel(this.max, this.searchVal1, this.searchVal1 + 5, this.includeItems).subscribe((skill:any) => {
        this.seaItems = skill;
      });
  }

  itemsClick() {
    this.includeItems = !this.includeItems;
  }
}
