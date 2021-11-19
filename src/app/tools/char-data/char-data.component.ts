import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-char-data',
  templateUrl: './char-data.component.html',
  styleUrls: ['./char-data.component.scss']
})
export class CharDataComponent implements OnInit {
  data;
  equip = [];
  skills = [];
  jobsArr = ["NONE", "WAR", "MNK", "WHM", "BLM", "RDM", "THF", "PLD", "DRK", "BST", "BRD", "RNG", "SAM", "NIN", "DRG", "SMN", "BLU", "COR", "PUP", "DNC", "SCH", "GEO", "RUN"];
  facePath;
  searchVal: string;
  alertMessage;
  error = true;
  constructor(private dataService: ApiService) { }

  ngOnInit(): void {
  }

  searchClick() {
    var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const maxChar = 30;
    if(format.test(this.searchVal)) {
      this.error = true;
      this.alertMessage = 'The search cannot contain any symbols.';
    } else {
      this.alertMessage = '';
      if (this.searchVal && this.searchVal.length < maxChar) {
        this.dataService.sendGetChar(this.searchVal).subscribe((data: any[])=>{
          // console.log(data);
          if (data) {
            this.data = data[0];
            this.equip = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            this.facePath = this.getImgPath(this.data.Face, this.data.Race);
            for (var i = 0; i < 65; i++) {//65 is total number of skills. Initializing bc not all will have values
              this.skills.push(0);
            }
            for (var i = 0; i < this.data.Equipment.length; i++) {
              this.equip[this.data.Equipment[i].ESlotId] = this.data.Equipment[i].ItemId;
            }
      
            for (var i = 0; i < this.data.Skills.length; i++) {
              this.skills[this.data.Skills[i].SkillId -1] = this.data.Skills[i].Value / 10;
            }
          } else {
            this.data = null; // to clear previous
            this.error = false;
            this.alertMessage = 'No results found.';
          }
        });
      } else {
        this.error = true;
        this.alertMessage = 'The search must have a value and be less than ' + maxChar + ' characters.';
      }
    }
  }

  getImgPath(face, race): string {
    var str: string = "../../../assets/imgs/faces/";
    switch (race) {
      default:
      case 1:
        str += "/Hm";
        break;
      case 2:
        str += "/Hf";
        break;
      case 3:
        str += "/Ef";
        break;
      case 4:
        str += "/Em";
        break;
      case 5:
        str += "/Tm";
        break;
      case 6:
        str += "/Tf";
        break;
      case 7:
        str += "/M";
        break;
      case 8:
        str += "/G";
        break;
    }
    switch (face) {
      default:
      case 0:
        str += "1a.jpg";
        break;
      case 1:
        str += "1b.jpg";
        break;
      case 2:
        str += "2a.jpg";
        break;
      case 3:
        str += "2b.jpg";
        break;
      case 4:
        str += "3a.jpg";
        break;
      case 5:
        str += "3b.jpg";
        break;
      case 6:
        str += "4a.jpg";
        break;
      case 7:
        str += "4b.jpg";
        break;
      case 8:
        str += "5a.jpg";
        break;
      case 9:
        str += "5b.jpg";
        break;
      case 10:
        str += "6a.jpg";
        break;
      case 11:
        str += "6b.jpg";
        break;
      case 12:
        str += "7a.jpg";
        break;
      case 13:
        str += "7b.jpg";
        break;
      case 14:
        str += "8a.jpg";
        break;
      case 15:
        str += "8b.jpg";
        break;
    }
    return str;
  }
}
