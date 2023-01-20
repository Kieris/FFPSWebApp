import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './user-views/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'tools', loadChildren: () => import('./tools/tools.module').then(m => m.ToolsModule)
  },
  { path: '', redirectTo: 'tools', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
