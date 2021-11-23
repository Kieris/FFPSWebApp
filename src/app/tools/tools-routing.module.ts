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
import { AttachmentsComponent } from './misc-details/attachments/attachments.component';
import { BcnmComponent } from './bcnm/bcnm.component';
import { BcnmDetailsComponent } from './bcnm/bcnm-details/bcnm-details.component';
import { MissionsComponent } from './missions/missions.component';
import { QuestsComponent } from './quests/quests.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

const routes: Routes = [
  { path: '', component: ToolsComponent,
  children: [
    { path: 'mob', component: MobDataComponent },
    { path: 'mob/:id/:zid/:pid', component: MobDetailsComponent },
    { path: 'char', component: CharDataComponent },
    { path: 'ah', component: AhComponent },
    { path: 'bcnm', component: BcnmComponent },
    { path: 'bcnm/:id', component: BcnmDetailsComponent },
    { path: 'fishing', component: FishingComponent },
    { path: 'zones', component: ZonesComponent },
    { path: 'zones/:name/:id', component: ZoneDataComponent },
    { path: 'zones/zone/:id/:aid', component: ActorDataComponent },
    { path: 'jobs', component: JobsComponent },
    { path: 'jobs/:id', component: JobDetailsComponent },
    { path: 'jobs/pup/attachments', component: AttachmentsComponent },
    { path: 'jobs/:type/:id', component: MiscDetailsComponent },
    { path: 'items', component: ItemsComponent },
    { path: 'items/:id', component: ItemDetailsComponent },
    { path: 'ws/:id', component: WsComponent },
    { path: 'sc', component: SkillchainListComponent },
    { path: 'sc/:id', component: SkillchainComponent },
    { path: 'crafting', component: CraftingComponent },
    { path: 'crafts/:id', component: CraftingDetailsComponent },
    { path: 'tutorials', component: TutorialsComponent },
    { path: 'missions', component: MissionsComponent },
    { path: 'quests', component: QuestsComponent },


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
