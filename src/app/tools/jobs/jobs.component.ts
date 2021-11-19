import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
jobs = [
  { name: "Warrior", id: 1 },
  { name: "Monk", id: 2 },
  { name: "White Mage", id: 3 },
  { name: "Black Mage", id: 4 },
  { name: "Red Mage", id: 5 },
  { name: "Thief", id: 6 },
  { name: "Paladin", id: 7 },
  { name: "Dark Knight", id: 8 },
  { name: "Beastmaster", id: 9 },
  { name: "Bard", id: 10 },
  { name: "Ranger", id: 11 },
  { name: "Samurai", id: 12 },
  { name: "Ninja", id: 13 },
  { name: "Dragoon", id: 14 },
  { name: "Summoner", id: 15 },
  { name: "Blue Mage", id: 16 },
  { name: "Corsair", id: 17 },
  { name: "Puppermaster", id: 18 },
  { name: "Dancer", id: 19 },
  { name: "Scholar", id: 20 }
];
  constructor() { }

  ngOnInit(): void {
  }

}
