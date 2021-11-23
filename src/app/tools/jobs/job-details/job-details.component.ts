import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
id: number;
traits;
abilities;
spells;
merits;
skillRanks = [];
af;
pets;
automatonSpells;
automatonFrames;
heads = [];
frames = [];
pupSkills;
searchVal: number = 75;
searchPupVal: number = 75;
searchPupFr;
searchPupHe;


  constructor(private route: ActivatedRoute, private ds: ApiService) {
    if (route.params) {
      route.params.subscribe(val => {
        this.id = val.id;
        this.ds.sendGetTraitsByJob(this.id).subscribe((data: any[])=>{
          this.traits = data;
        });
        this.ds.sendGetAbilitiesByJob(this.id).subscribe((data: any[])=>{
          this.abilities = data;
        });
        this.ds.sendGetPetsByJob(this.id).subscribe((data: any[])=>{
          this.pets = data;
        });
        this.ds.sendGetMeritsByJob(this.id).subscribe((data: any[])=>{
          this.merits = data;
        });
        if (this.id == 18) {
          this.ds.sendGetPupSpells().subscribe((data: any[])=>{
            this.automatonSpells = data;
          });
          this.ds.sendGetPupFrames().subscribe((data: any[])=>{
            this.automatonFrames = data;
            if (this.automatonFrames) {
              this.heads = this.automatonFrames.filter(item => item.Slot == 1);
              this.frames = this.automatonFrames.filter(item => item.Slot == 2);
              this.searchPupFr = this.frames[0].ItemId;
              this.searchPupHe = this.heads[0].ItemId;
              this.searchPupClick();
            }
          });
        }
        this.ds.sendGetSkillRanksByJob(this.id).subscribe((data: any[])=>{
          this.skillRanks = [];
          data.forEach(item => {
            if (item.Value !== 0) {
            this.getMaxLevel(this.searchVal, item.Value).then((skill:any) => {
              this.skillRanks.push({
                ...item,
                lVal: skill[0].Value 
              });
            });
            }
          });
        });
        this.ds.sendGetSpellsByJob(this.id).subscribe((data: any[])=>{
          this.spells = data;
        });
        this.ds.sendGetAFByJob(this.id).subscribe((data: any[])=>{
          this.af = data;
        });
      });
    }
   }

  ngOnInit(): void {
  }

  getMaxLevel(val: number, rank: number) {
    return this.ds.sendGetSkillRanksByLevel(val, rank).toPromise();
  }

  searchClick() {
    this.skillRanks.forEach((item: any) => {
      this.getMaxLevel(this.searchVal, item.Value).then((skill:any) => {
        item.lVal = skill[0].Value;
      });
    });
  }

  searchPupClick() {
    this.ds.sendGetPupSkills(this.searchPupHe, this.searchPupFr, this.searchPupVal).toPromise().then(x => {
      this.pupSkills = x;
    })
  }

  getElem(value: number) {
    switch (value) {
      case 0: return "physical";
      case 1: return "fire";
      case 2: return "ice";
      case 3: return "wind";   
      case 4: return "earth";      
      case 5: return "lightning";      
      case 6: return "water";      
      case 7: return "light";  
      case 8: return "dark";      
      default: return value;
    }
  }
}
