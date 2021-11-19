import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  private themeWrapper = document.querySelector('body');
  constructor(private ds: ApiService) { }

  ngOnInit(): void {
    this.dark();
   }

   light() {
      this.themeWrapper.style.setProperty('--cardColor', "black");
      this.themeWrapper.style.setProperty('--body-bg', "white");
      this.themeWrapper.style.setProperty('--cardBackground', "#f8f9fa");    
      this.themeWrapper.style.setProperty("--table-bg", "#f8f9fa");
      this.themeWrapper.style.setProperty("--table-striped-bg", "#ecedee");
      this.themeWrapper.style.setProperty("--table-striped-color", "#000");
      this.themeWrapper.style.setProperty("--table-active-bg", "#dfe0e1");
      this.themeWrapper.style.setProperty("--table-active-color", "#000");
      this.themeWrapper.style.setProperty("--table-hover-bg", "#e5e6e7");
      this.themeWrapper.style.setProperty("--table-hover-color", "#000");
      this.themeWrapper.style.setProperty("--table-color", "#000");
      this.themeWrapper.style.setProperty("--border-color", "rgba(0, 0, 0, 0.125)");
   }

   dark() {
    this.themeWrapper.style.setProperty('--body-bg', "black");
    this.themeWrapper.style.setProperty('--cardColor', "white");
    this.themeWrapper.style.setProperty('--cardBackground', "#272323");     
    this.themeWrapper.style.setProperty("--table-bg", "#212529");
    this.themeWrapper.style.setProperty("--table-striped-bg", "#2c3034");
    this.themeWrapper.style.setProperty("--table-striped-color", "#fff");
    this.themeWrapper.style.setProperty("--table-active-bg", "#373b3e");
    this.themeWrapper.style.setProperty("--table-active-color", "#fff");
    this.themeWrapper.style.setProperty("--table-hover-bg", "#323539");
    this.themeWrapper.style.setProperty("--table-hover-color", "#fff");
    this.themeWrapper.style.setProperty("--table-color", "#fff");
    this.themeWrapper.style.setProperty("--border-color", "rgba(255, 255, 255, 0.125)");
   }

   themeClick() {
     if (this.themeWrapper.style.getPropertyValue("--cardColor") === "black") {
       this.dark();
     } else {
       this.light();
     }
   }
}

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { isNumber } from 'util';

// tslint:disable-next-line: use-pipe-transform-interface
@Pipe({ name: 'safeHtml' })
export class Safe {
  constructor(private sanitizer: DomSanitizer) {}

  transform(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

@Pipe({ name: 'removeUnderscore' })
export class RemoveUnderscorePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      var i, frags = value.split('_');
      for (i=0; i<frags.length; i++) {
        if (frags[i].length > 2) {
          frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }
      }
      return frags.join(' ');
    }

    return "";
  }
}

@Pipe({ name: 'spell' })
export class SpellPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
    var i, frags = value.split('_');
    for (i=0; i<frags.length; i++) {
      if (frags[i].length > 2) {
        if (frags[i] == 'iii'){
          frags[i] = frags[i].toUpperCase();
        } else if (frags[i].indexOf('-') !== -1) {          
          frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1, frags[i].indexOf('-')) + ' - ' + 
          frags[i].charAt(frags[i].indexOf('-') + 1).toUpperCase() + frags[i].slice(frags[i].indexOf('-') + 2);
        } else {
          frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }
      } else {
        if(frags[i].charAt(0) === 'i' || frags[i].charAt(0) === 'x' || frags[i].charAt(0) === 'v' || frags[i].includes(".")) {
          frags[i] = frags[i].toUpperCase();
        } 
      }
    }
    return frags.join(' ');
    }
    return ""
  }
}

@Pipe({ name: 'roman' })
export class RomanPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    switch (value) {
      case 1: return "I";
      case 2: return "II";
      case 3: return "III";
      case 4: return "IV";
      case 5: return "V";
      case 6: return "VI";
      case 7: return "VI";
      case 8: return "VIII";
      case 9: return "IX";
      case 10: return "X";
      default: return "";
    }
  }
}

@Pipe({ name: 'jobs' })
export class JobsPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    switch (value) {
      case 1: return "Warrior";
      case 2: return "Monk";
      case 3: return "White Mage";
      case 4: return "Black Mage";
      case 5: return "Red Mage";
      case 6: return "Thief";
      case 7: return "Paladin";
      case 8: return "Dark Knight";
      case 9: return "Beastmaster";
      case 10: return "Bard";
      case 11: return "Ranger";
      case 12: return "Samurai";
      case 13: return "Ninja";
      case 14: return "Dragoon";
      case 15: return "Summoner";
      case 16: return "Blue Mage";
      case 17: return "Corsair";
      case 18: return "Puppetmaster";
      case 19: return "Dancer";
      case 20: return "Scholar";
      default: return value;
    }
  }
}
@Pipe({ name: 'target' })
export class TargetPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    switch (value) {
      case 1: return "Self";
      case 2: return "Party Member";
      case 3: return "Self or Party Member";
      case 4: return "Enemy";
      case 5: return "V";
      case 6: return "VI";
      case 129: return "Self";
      case 32: return "Incapacitated Player";
      case 91: return "Any Player";
      case 95: return "Any";

      case 257: return "Pet Target";
      default: return value;
    }
  }
}

@Pipe({ name: 'slot' })
export class SlotPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    switch (value) {
      case 1: return "Main";
      case 2: return "Sub";
      case 3: return "Main";
      case 4: return "Ranged";
      case 8: return "Ammo";
      case 16: return "Head";
      case 32: return "Body";
      case 64: return "Hands";
      case 128: return "Legs";
      case 256: return "Feet";
      case 512: return "Neck";
      case 1024: return "Waist";
      case 6144: return "Ear";
      case 24576: return "Ring";
      case 32768: return "Back";
      default: return value;
    }
  }
}

@Pipe({ name: 'rslot' })
export class RSlotPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    switch (value) {
      case 0: return "none";
      case 2: return "ranged";
      case 3: return "ammo";
      case 4: return "head";
      case 6: return "hand";
      case 8: return "foot";
      case 16: return "head";
      case 64: return "hand";

      default: return "";
    }
  }
}

@Pipe({ name: 'race' })
export class RacePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    switch (value) {
      case 1: return "Hume M";
      case 2: return "Hume F";
      case 3: return "Hume";
      case 4: return "Elvaan M";
      case 8: return "Elvaan F";
      case 12: return "Elvaan";
      case 16: return "Taru M";
      case 32: return "Taru F";
      case 48: return "Taru";
      case 64: return "Mithra";
      case 106: return "F";
      case 128: return "Galka";
      case 149: return "M";
      default: return "All Races";
    }
  }
}

@Pipe({ name: 'spawn' })
export class SpawnPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    switch (value) {
      case 0: return "Normal";
      case 1: return "Night (20:00-04:00)";
      case 2: return "Evening (18:00-06:00)";
      case 4: return "Weather";      
      case 8: return "Fog (02:00-07:00)";
      case 16: return "Moon Phase";
      case 32: return "Lottery";
      case 64: return "Time Window";
      case 128: return "Summoned by entity/item trade";
      case 256: return "Pixie Hate";
      default: return value;
    }
  }
}

@Pipe({ name: 'mobtype' })
export class MobTypePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    var str = "";
    if (value == 0) {
      str += "Normal, "
    }
    if (value & 0x0001) {
      str += "Unknown, "
    }
    if (value & 0x0002) {
      str += "Notorius Monster, "
    }
    if (value & 0x0004) {
      str += "Fished, "
    }
    if (value & 0x0008) {
      str += "Called, "
    }
    if (value & 0x0010) {
      str += "Battlefield, "
    }
    if (value & 0x0020) {
      str += "Event, "
    }
    str = str.substring(0, str.length - 2);
    if (str == "") {
      str = value;
    }
    return str;
  }
}


@Pipe({ name: 'detecttype' })
export class DetectTypePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    var str = "";
    if (value == 0) {
      str += "None, "
    }
    if (value & 0x0001) {
      str += "Sight, "
    }
    if (value & 0x0002) {
      str += "Hearing, "
    }
    if (value & 0x0004) {
      str += "Low HP, "
    }
    if (value & 0x0008) {
      str += "Unknown1, "
    }
    if (value & 0x0010) {
      str += "Unknown2, "
    }
    if (value & 0x0020) {
      str += "Magic, "
    }
    if (value & 0x0040) {
      str += "Weapon Skill, "
    }
    if (value & 0x0080) {
      str += "Job Ability, "
    }
    if (value & 0x0100) {
      str += "Scent, "
    }
    str = str.substring(0, str.length - 2);
    if (str == "") {
      str = value;
    }
    return str;
  }
}

@Pipe({ name: 'addtype' })
export class AddTypePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    var str = "";
    if (value == 0) {
      str += "Normal, "
    }
    if (value & 0x0001) {
      str += "Merit, "
    }
    if (value & 0x0002) {
      str += "Astral Flow, "
    }
    if (value & 0x0004) {
      str += "Main Job Only, "
    }
    if (value & 0x0008) {
      str += "Learned, "
    }
    if (value & 0x0010) {
      str += "Light Arts, "
    }
    if (value & 0x0020) {
      str += "Dark Arts, "
    }
    if (value & 0x0040) {
      str += "Jug Pet, "
    }
    if (value & 0x0080) {
      str += "Charm Pet, "
    }
    if (value & 0x0100) {
      str += "Avatar, "
    }
    if (value & 0x0200) {
      str += "Automaton, "
    }
    str = str.substring(0, str.length - 2);
    if (str == "") {
      str = value;
    }
    return str;
  }
}

@Pipe({ name: 'zoneType' })
export class ZoneTypePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    switch (value) {
      case 0: return "None";
      case 1: return "City";
      case 2: return "Outdoors";
      case 3: return "Dungeon";      
      case 4: return "Battlefield";
      case 5: return "Dynamis";
      case 6: return "Instance Dungeon";
      case 7: return "Limbus";
      case 8: return "Salvage";
      case 9: return "Einherjar";
      default: return value;
    }
  }
}

@Pipe({ name: 'droptype' })
export class DropTypePipe implements PipeTransform {
  transform(value: number, args?: any): any {
    switch (value) {
      case 0: return "Normal";
      case 1: return "Grouped";
      case 2: return "Steal";
      case 4: return "Despoil";      
      default: return value;
    }
  }
}

@Pipe({ name: 'skillType' })
export class SkillTypePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    switch (value) {
      case 0: return "None";
      case 1: return "Hand-to-Hand";
      case 2: return "Dagger";
      case 3: return "Sword";
      case 4: return "Great Sword";
      case 5: return "Axe";
      case 6: return "Great Axe";
      case 7: return "Scythe";
      case 8: return "Polearm";
      case 9: return "Katana";
      case 10: return "Great Sword";
      case 11: return "Club";
      case 12: return "Staff";
      case 25: return "Archery";
      case 26: return "Marksmanship";
      case 27: return "Throwing";
      case 28: return "Guard";
      case 29: return "Evasion";
      case 30: return "Shield";
      case 31: return "Parrying";
      case 32: return "Divine Magic";
      case 33: return "Healing Magic";
      case 34: return "Enhancing Magic";
      case 35: return "Enfeebling Magic";
      case 36: return "Elemental Magic";
      case 37: return "Dark Magic";
      case 38: return "Summoning Magic";
      case 39: return "Ninjitsu Magic";
      case 40: return "Singing";
      case 41: return "String";
      case 42: return "Wind";
      case 43: return "Blue Magic";
      case 44: return "Geomancy Magic";
      case 48: return "Fishing";

      default: return "";
    }
  }
}

@Pipe({ name: 'element' })
export class ElementPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    switch (value) {
      case 0: return "None";
      case 1: return "water";
      case 2: return "fire";
      case 4: return "earth";   
      case 8: return "dark";      
      case 16: return "wind";      
      case 32: return "ice";      
      case 64: return "lightning";      
      case 128: return "light";
      case 255: return "dark";      
      default: return value;
    }
  }
}

@Pipe({ name: 'spelement' })
export class SpellElementPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    switch (value) {
      case 0: return "Physical";
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

@Pipe({ name: 'craft' })
export class CraftPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    switch (value) {
      case "Wood": return "Woodworking";
      case "Cloth": return "Clothcraft";
      case "Leather": return "Leathercraft";
      case "Bone": return "Bonecraft";   
      case "Alchemy": return "Alchemy";      
      case "Cook": return "Cooking";      
      case "Smith": return "Smithing";      
      case "Gold": return "Goldsmithing";
      default: return value;
    }
  }
}

@Pipe({ name: 'sc' })
export class SCPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    switch (value) {
      case 0: return "None";
      case 1: return "Transfixion";
      case 2: return "Compression";
      case 3: return "Liquefaction";   
      case 4: return "Scission";      
      case 5: return "Reverberation";      
      case 6: return "Detonation";      
      case 7: return "Induration";      
      case 8: return "Impaction";
      case 9: return "Gravitation";
      case 10: return "Distortion";
      case 11: return "Fusion";
      case 12: return "Fragmentation";
      case 13: return "Light";
      case 14: return "Darkness";
      case 15: return "Light II";
      case 16: return "Darkness II";      
      default: return value;
    }
  }
}

@Pipe({ name: 'jobsstr' })
export class JobsStringPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    var str = ""
    const jobsArr = ["WAR ", "MNK ", "WHM ", "BLM ", "RDM ", "THF ", "PLD ", "DRK ", "BST ", "BRD ", "RNG ", "SAM ", "NIN "
    , "DRG ", "SMN ", "BLU ", "COR ", "PUP ", "DNC ", "SCH ", "GEO ", "RUN"];

    var binary_string = window.atob(value);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);

    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    for (var i = 0; i < value.length; i++) {
      if(bytes[i] > 0) {
        str += jobsArr[i]
      }
    }
    return str
  }
}

@Pipe({ name: 'ahcat' })
export class AHCatPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    var str = '';
    switch (value) {
      case 1:
        str = "Weapons -> Hand-to-Hand"; break;
      case 2:
        str = "Weapons -> Dagger"; break;
      case 3:
        str = "Weapons -> Sword"; break;
      case 4:
        str = "Weapons -> Great Sword"; break;
      case 5:
        str = "Weapons -> Axe"; break;
      case 6:
        str = "Weapons -> Great Axe"; break;
      case 7:
        str = "Weapons -> Scythe"; break;
      case 8:
        str = "Weapons -> Polearm"; break;
      case 9:
        str = "Weapons -> Katana"; break;
      case 10:
        str = "Weapons -> Great Katana"; break;
      case 11:
        str = "Weapons -> Club"; break;
      case 12:
        str = "Weapons -> Staff"; break;
      case 13:
        str = "Weapons -> Ranged"; break;
      case 14:
        str = "Weapons -> Instruments"; break;
      case 15:
        str = "Weapons -> Arrows, Ammunition"; break;
      case 16:
        str = "Armor -> Shields"; break;
      case 17:
        str = "Armor -> Head"; break;
      case 18:
        str = "Armor -> Body"; break;					
      case 19:
        str = "Armor -> Hands"; break;
      case 20:
        str = "Armor -> Legs"; break;
      case 21:
        str = "Armor -> Feet"; break;
      case 22:
        str = "Armor -> Neck"; break;
      case 23:
        str = "Armor -> Waist"; break;
      case 24:
        str = "Armor -> Ears"; break;
      case 25:
        str = "Armor -> Rings"; break;
      case 26:
        str = "Armor -> Back"; break;
      case 28:
        str = "Scrolls -> White Magic"; break;
      case 29:
        str = "Scrolls -> Black Magic"; break;
      case 30:
        str = "Scrolls -> Summoning"; break;
      case 31:
        str = "Scrolls -> Ninjitsu"; break;
      case 32:
        str = "Scrolls -> Songs"; break;	
      case 33:
        str = "Medicine"; break;
      case 34:
        str = "Furnishings"; break;
      case 35:
        str = "Crystals"; break;
      case 36:
        str = "Others -> Cards"; break;
      case 37:
        str = "Others -> Cursed Items"; break;
      case 38:
        str = "Materials -> Smithing"; break;
      case 39:
        str = "Materials -> Goldsmithing"; break;
      case 40:
        str = "Materials -> Clothcraft"; break;
      case 41:
        str = "Materials -> Leathercraft"; break;
      case 42:
        str = "Materials -> Bonecraft"; break;
      case 43:
        str = "Materials -> Woodworking"; break;
      case 44:
        str = "Materials -> Alchemy 1"; break;
      case 46:
        str = "Others -> Misc."; break;
      case 47:
        str = "Others -> Fishing Gear"; break;
      case 49:
        str = "Others -> Ninja Tools"; break;
      case 50:
        str = "Others -> Misc. 2"; break;
      case 51:
        str = "Food -> Fish"; break;
      case 52:
        str = "Food -> Meals -> Meat & Eggs"; break;
      case 53:
        str = "Food -> Meals -> Seafood"; break;
      case 54:
        str = "Food -> Meals -> Vegetables"; break;
      case 55:
        str = "Food -> Meals -> Soups"; break;
      case 56:
        str = "Food -> Meals -> Breads & Rice"; break;
      case 57:
        str = "Food -> Meals -> Sweets"; break;
      case 58:
        str = "Food -> Meals -> Drinks"; break;
      case 58:
        str = "Food -> Ingredients"; break;
      case 60:
        str = "Scrolls -> Dice"; break;		
      case 61:
        str = "Others -> Automation"; break;
      case 63:
        str = "Materials -> Alchemy 2"; break;	
      case 66:
        str = "Others -> Misc. 3"; break; // also listed as Geo, Maybe Others -> Beast-made
      default: str = "None"; break;
    }
    return str;
  }
}