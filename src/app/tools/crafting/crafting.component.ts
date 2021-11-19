import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crafting',
  templateUrl: './crafting.component.html',
  styleUrls: ['./crafting.component.scss']
})
export class CraftingComponent implements OnInit {
  crafts = [
    { name: "Alchemy", id: "Alchemy" },
    { name: "Bonecraft", id: "Bone" },
    { name: "Clothcraft", id: "Cloth" },
    { name: "Cooking", id: "Cook" },
    { name: "Goldsmithing", id: "Gold" },
    { name: "Leathercraft", id: "Leather" },
    { name: "Smithing", id: "Smith" },
    { name: "Woodworking", id: "Wood" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
