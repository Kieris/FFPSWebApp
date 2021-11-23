import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { AHCatPipe, CraftPipe, DropTypePipe, ElementPipe, JobsPipe, JobsStringPipe, RacePipe, RomanPipe, RSlotPipe, Safe, SCPipe, SkillTypePipe, SlotPipe, SpawnPipe, SpellElementPipe, TargetPipe, ToolsComponent, SpellPipe, ZoneTypePipe, MobTypePipe, DetectTypePipe, AddTypePipe, TimePipe } from './tools.component';
import { MobDataComponent } from './mob-data/mob-data.component';
import { CharDataComponent } from './char-data/char-data.component';
import { AhComponent } from './ah/ah.component';
import { FishingComponent } from './fishing/fishing.component';
import { FormsModule } from '@angular/forms';
import { RemoveUnderscorePipe} from './tools.component';
import { ZonesComponent } from './zones/zones.component';
import { JobsComponent } from './jobs/jobs.component';
import { ItemsComponent } from './items/items.component';
import { CraftingComponent } from './crafting/crafting.component';
import { LsComponent } from './ls/ls.component';
import { ZoneDataComponent } from './zones/zone-data/zone-data.component';
import { ActorDataComponent } from './zones/actor-data/actor-data.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { MobDetailsComponent } from './mob-data/mob-details/mob-details.component';
import { ItemBoxComponent } from './items/item-box/item-box.component';
import { ItemDetailsComponent } from './items/item-details/item-details.component';
import { WsComponent } from './ws/ws.component';
import { SkillchainComponent } from './ws/skillchain/skillchain.component';
import { CraftingDetailsComponent } from './crafting/crafting-details/crafting-details.component';
import { SkillchainListComponent } from './ws/skillchain-list/skillchain-list.component';
import { MiscDetailsComponent } from './misc-details/misc-details.component';
import { AttachmentsComponent } from './misc-details/attachments/attachments.component';
import { BcnmComponent } from './bcnm/bcnm.component';
import { BcnmDetailsComponent } from './bcnm/bcnm-details/bcnm-details.component';
import { ItemIconComponent } from '../core/item-icon/item-icon.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { MissionsComponent } from './missions/missions.component';
import { QuestsComponent } from './quests/quests.component';


@NgModule({
  declarations: [
    ToolsComponent,
    RemoveUnderscorePipe,
    SpellPipe,
    RomanPipe,
    TargetPipe,
    Safe,
    SlotPipe,
    RSlotPipe,
    RacePipe,
    SpawnPipe,
    SkillTypePipe,
    SpellElementPipe,
    TimePipe,
    CraftPipe,
    JobsPipe,
    JobsStringPipe,
    ZoneTypePipe,
    MobTypePipe,
    SCPipe,
    DropTypePipe,
    DetectTypePipe,
    AddTypePipe,
    ElementPipe,
    AHCatPipe,
    MobDataComponent, 
    CharDataComponent,
    AhComponent,
    FishingComponent,
    ZonesComponent,
    JobsComponent,
    ItemsComponent,
    CraftingComponent,
    LsComponent,
    ZoneDataComponent,
    ActorDataComponent,
    JobDetailsComponent,
    MobDetailsComponent,
    ItemBoxComponent,
    ItemDetailsComponent,
    WsComponent,
    SkillchainComponent,
    CraftingDetailsComponent,
    SkillchainListComponent,
    MiscDetailsComponent,
    AttachmentsComponent,
    BcnmComponent,
    BcnmDetailsComponent,
    ItemIconComponent,
    TutorialsComponent,
    MissionsComponent,
    QuestsComponent
  ],
  imports: [
    CommonModule,
    ToolsRoutingModule,
    FormsModule
  ], exports: [
    RemoveUnderscorePipe,
    SpellPipe,
    JobsPipe,
    SkillTypePipe
  ], providers: [ElementPipe, SpellPipe]
})
export class ToolsModule { }
