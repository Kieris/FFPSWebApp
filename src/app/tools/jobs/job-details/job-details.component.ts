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
skillRanks;
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
spellVis = false;
pupVis = false;


  constructor(private route: ActivatedRoute, private ds: ApiService) {
    if (route.params) {
      route.params.subscribe(val => {
        this.id = Number(val.id);
        if (this.id == 18) {
          this.pupVis = true;
        } else if(this.hasSpells() > 0) {
          this.spellVis = true;
        } else {
          this.pupVis = false;
          this.spells = false;
        }
        this.ds.sendGetPetsByJob(this.id).toPromise().then((data: any[])=>{
          this.pets = data;
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

  traitsClick() {
    if(!this.traits) {
      this.ds.sendGetTraitsByJob(this.id).toPromise().then((data: any[])=>{
        this.traits = data;
      });
    }
  }

  absClick(){
    if(!this.abilities) {
      this.ds.sendGetAbilitiesByJob(this.id).toPromise().then((data: any[])=>{
        this.abilities = data;
      });
    }
  }

  meritClick() {
    if(!this.merits) {
      this.ds.sendGetMeritsByJob(this.id).toPromise().then((data: any[])=>{
        this.merits = data;
      });
    }
  }

  pupClickSpells() {
    if (!this.automatonSpells) {
      this.ds.sendGetPupSpells().toPromise().then((data: any[])=>{
        this.automatonSpells = data;
      });
    }
  }

  pupClickFrames(){
    if(!this.automatonFrames) {
      this.ds.sendGetPupFrames().toPromise().then((data: any[])=>{
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
  }

  spellClick() {
    if(!this.spells) {
      this.ds.sendGetSpellsByJob(this.id).toPromise().then((data: any[])=>{
        this.spells = data;
      });
    }
  }

  afClick() {
    if(!this.af) {
      this.ds.sendGetAFByJob(this.id).toPromise().then((data: any[])=>{
        this.af = data;
      });
    }
  }

  rankClick() {
    if(!this.skillRanks) {
      this.ds.sendGetSkillRanksByJob(this.id).toPromise().then((data: any[])=>{
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
    }
  }

  //Similar to GetSpellGrpByJob in API
  hasSpells(): number {
    switch (this.id) {
      case 3:
        return 6
      case 7:
        return 6
      case 15:
        return 5
      case 10:
        return 1
      case 16:
        return 3
      case 4:
        return 2
      case 8:
        return 2
      case 21:
        return 2
      case 5:
        return 10
      case 20:
        return 10
      case 13:
        return 4
      default:
        return 0
      }
  }
}
