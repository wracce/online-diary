import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryPageComponent } from './pages/diary-page/diary-page.component';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';

const routes: Routes = [
  { path: '', component: NotesPageComponent},
  { path: 'notes', redirectTo: '/'},
  { path: 'diary', component: DiaryPageComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '/diary'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
