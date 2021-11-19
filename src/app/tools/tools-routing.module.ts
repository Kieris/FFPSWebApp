import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AhComponent } from './ah/ah.component';
import { CharDataComponent } from './char-data/char-data.component';
import { CraftingDetailsComponent } from './crafting/crafting-details/crafting-details.component';
import { CraftingComponent } from './crafting/crafting.component';
import { FishingComponent } from './fishing/fishing.component';
import { ItemDetailsComponent } from './items/item-details/item-details.component';
import { ItemsComponent } from './items/items.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { JobsComponent } from './jobs/jobs.component';
import { LsComponent } from './ls/ls.component';
import { MobDataComponent } from './mob-data/mob-data.component';
import { MobDetailsComponent } from './mob-data/mob-details/mob-details.component';
import { ToolsComponent } from './tools.component';
import { SkillchainComponent } from './ws/skillchain/skillchain.component';
import { WsComponent } from './ws/ws.component';
import { ActorDataComponent } from './zones/actor-data/actor-data.component';
import { ZoneDataComponent } from './zones/zone-data/zone-data.component';
import { ZonesComponent } from './zones/zones.component';
import { SkillchainListComponent } from './ws/skillchain-list/skillchain-list.component';
import { MiscDetailsComponent } from './misc-details/misc-details.component';

const routes: Routes = [
  { path: '', component: ToolsComponent,
  children: [
    { path: 'mob', component: MobDataComponent },
    { path: 'mob/:id/:zid/:pid', component: MobDetailsComponent },
    { path: 'char', component: CharDataComponent },
    { path: 'ah', component: AhComponent },
    { path: 'fishing', component: FishingComponent },
    { path: 'zones', component: ZonesComponent },
    { path: 'zones/:name/:id', component: ZoneDataComponent },
    { path: 'zones/zone/:id/:aid', component: ActorDataComponent },
    { path: 'jobs', component: JobsComponent },
    { path: 'jobs/:id', component: JobDetailsComponent },
    { path: 'jobs/:type/:id', component: MiscDetailsComponent },
    { path: 'items', component: ItemsComponent },
    { path: 'items/:id', component: ItemDetailsComponent },
    { path: 'ws/:id', component: WsComponent },
    { path: 'sc', component: SkillchainListComponent },
    { path: 'sc/:id', component: SkillchainComponent },
    { path: 'crafting', component: CraftingComponent },
    { path: 'crafts/:id', component: CraftingDetailsComponent },

    { path: 'ls', component: LsComponent },
    { path: '', redirectTo: 'ah', pathMatch: 'full'}
  ] },
  //{ path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
