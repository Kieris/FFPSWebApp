import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { UserService } from '../../../core/user.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  item;
  dets;
  flags: string;
  fishDets;
  fishAreas;
  recipes;
  merchants;

  constructor(private route: ActivatedRoute, 
    private ds: ApiService, 
    private us: UserService,
    private router: Router) {
    if (route.params) {
      route.params.subscribe(val => {
        this.item = null;
        this.dets = null;
        this.flags = null;
        this.fishDets = null;
        this.fishAreas = null;
        this.recipes = null;
        this.ds.sendGetItemById(val.id).toPromise().then((data: any[])=>{
          if (data) {
            this.item = data[0];
            var str = "";
            if (0x0001 & this.item.Flags) {
              str += 'Wall Hanging, ';
            }
            if (0x0002 & this.item.Flags) {
              str += 'Flag 01, ';
            }
            /*if (0x0004 & this.item.Flags) {
              str += 'Mystery Box Possibility, ';
            }*/
            if (0x0008 & this.item.Flags) {
              str += 'Mog Garden, ';
            }
            if (0x0010 & this.item.Flags) {
              str += 'Mailable, ';
            }
            if (0x0020 & this.item.Flags) {
              str += 'Inscribable, ';
            }
            if (0x0040 & this.item.Flags) {
              str += 'Cannot Auction, ';
            }
            if (0x0080 & this.item.Flags) {
              str += 'Scroll, ';
            }
            if (0x0100 & this.item.Flags) {
              str += 'Linkshell, ';
            }
            if (0x0200 & this.item.Flags) {
              str += 'Usable, ';
            }
            if (0x0400 & this.item.Flags) {
              str += 'Can Trade NPC, ';
            }
            if (0x0800 & this.item.Flags) {
              str += 'Can Equip, ';
            }
            if (0x1000 & this.item.Flags) {
              str += 'Cannot Sell, ';
            }
            if (0x2000 & this.item.Flags) {
              str += 'Cannot Send, ';
            }
            this.flags = str.substring(0, str.length - 2);
          }          
        });
        this.ds.sendGetItemDetails(val.id).toPromise().then((data: any[])=>{
          if (data) {
            this.dets = data;
          }          
        });
        this.ds.sendGetFishDetails(val.id).toPromise().then((data: any[])=>{
          if (data) {
            this.fishDets = data;
            this.ds.sendGetFishAreas(val.id).toPromise().then((areas: any[])=>{
              if (areas) {
                this.fishAreas = areas;    
              }          
            });
          }          
        });
        this.ds.sendGetItemRecipes(val.id).toPromise().then((rec: any[])=>{
          if (rec) {
            this.recipes = rec;
          }          
        });
        this.ds.sendGetItemMerchants(val.id).toPromise().then((merch: any[])=>{
          if (merch) {
            this.merchants = merch;
          }          
        });
      });
    }
   }
  ngOnInit(): void {
  }

  searchAH(value: string) {
    if (value) {
      var i, frags = value.split('_');
      for (i=0; i<frags.length; i++) {
        if (frags[i].length > 2) {
          frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }
      }
      value = frags.join(' ');
    }
    this.us.ahSearch = value;
    this.router.navigateByUrl('/tools/ah');
  }
}
